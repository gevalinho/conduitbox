'use client'

import ContactArea from '@/components/contact/ContactArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import MobileScrollFix from '@/components/common/MobileScrollFix';
import DisableSmoothOnThisPage from '@/components/common/DisableSmoothOnThisPage';

// export const metadata = {
//   title: "Contact Vixan - Digital  Creative Agency Next js Template",  
// };


const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
           {/* <MobileScrollFix />  */}
           {/* <DisableSmoothOnThisPage /> */}
          <main>
        <ContactArea />
        </main>
        <FooterOne />
      </div>
      </div>
    </Wrapper>
  );
};

export default index;