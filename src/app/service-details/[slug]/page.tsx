
// // 'use client'

// import AboutHomeFour from '@/components/about/AboutHomeFour';
// import DetailsBanner from '@/components/details/DetailsBanner';
// import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
// import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
// import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';
// import Wrapper from '@/layouts/Wrapper';
// import FooterOne from '@/layouts/footers/FooterOne';
// import HeaderOne from '@/layouts/headers/HeaderOne';
// import React from 'react';

// // export const metadata = {
// //   title: "Service Details Vixan - Digital  Creative Agency Next js Template",
// // };

// import { getServiceBySlug, serviceParams } from "@/lib/services";
// import { notFound } from "next/navigation";
// type Params = { params: { slug: string } };

// export function generateStaticParams() {
//   return serviceParams;
// }

// export function generateMetadata({ params }: Params) {
//   const svc = getServiceBySlug(params.slug);
//   return {
//     title: svc ? `${svc.title} | ConduitBox` : "Service | ConduitBox",
//     description: svc?.des?.slice(0, 160),
//   };
// }



// const index = ({ params }: Params) => {
//   const service = getServiceBySlug(params.slug);
//   if (!service) return notFound();
//   return (
//     <Wrapper>
//       <HeaderOne />
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           <main>
//             <HeroServiceDetails title={service.title} description={service.des}/>
//             <ServiceAreaDetails service={service}/>
//             <DetailsBanner />
//             {/* <ServiceDetailsFaq serviceSlug={service.slug}/> */}
//             <AboutHomeFour />
//           </main>
//           <FooterOne />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default index;

// app/service-details/[slug]/page.tsx
import { getServiceBySlug, serviceParams } from "@/lib/services";
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
    </Wrapper>
  );
}
