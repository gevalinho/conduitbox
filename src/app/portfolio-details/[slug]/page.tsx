
 
// 'use client'

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import PortfolioDetailsArea from '@/components/details/PortfolioDetailsArea';
import { portfolioParams, getPortfolioBySlug } from '@/lib/portfolio';
import { notFound } from "next/navigation";



// export const metadata = {
//   title: "Portfolio Details Vixan - Digital  Creative Agency Next js Template",
// };

type Params = { params: { slug: string } };

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getPortfolioBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | ConduitBox`,
    description: s.des.slice(0, 160),
    openGraph: { title: s.title, description: s.des.slice(0, 200) },
  };
}

export function generateStaticParams() {
  return portfolioParams;
}

const index = ({params}: Params) => {
const portfolio = getPortfolioBySlug(params.slug);
  if (!portfolio) return notFound();

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsArea portfolio={portfolio}/>
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;