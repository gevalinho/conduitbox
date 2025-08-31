

// app/service-details/[slug]/page.tsx
import { getServiceBySlug, serviceParams } from "@/lib/services";
import Script from "next/script";
import { notFound } from "next/navigation";
import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeroServiceDetails from "@/components/hero/HeroServiceDetails";
import ServiceAreaDetails from "@/components/service/ServiceAreaDetails";
import DetailsBanner from "@/components/details/DetailsBanner";
import ServiceDetailsFaq from "@/components/faq/ServiceDetailsFaq";
import AboutHomeFour from "@/components/about/AboutHomeFour";

type Params = { params: { slug: string } };

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | ConduitBox`,
    description: s.des.slice(0, 160),
    openGraph: { title: s.title, description: s.des.slice(0, 200) },
  };
}

export function generateStaticParams() {
  return serviceParams;
}



export default function Page({ params }: Params) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails service={service} />
            <ServiceAreaDetails service={service} />
            <DetailsBanner />
            <ServiceDetailsFaq serviceslug={service.slug} />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>

<Script id="service-jsonld" type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.des,
      provider: { "@type": "Organization", name: "ConduitBox" },
      areaServed: "Global",
    }),
  }}
/>

    </Wrapper>
  );
}
