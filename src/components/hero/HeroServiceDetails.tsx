
// import React from 'react';
// import Image from 'next/image';
// import banner_img from '@/assets/img/service_details_banner.jpg';
// // import Service from '@/components/service/ServiceAreaDetails';
// import { services, type Service } from "@/lib/services";
// const service_data = services;
// type Props = { service?: Service };

// // const id = 0; // Example: get the first service, you can modify this to get the desired service
// const { title, des, features } = service_data[0];

// const HeroServiceDetails = () => {
//   return (
//     <>
//       <div className="cs_height_219 cs_height_lg_120"></div> 
//       <section>
//         <div className="container">
//           <div className="cs_section_heading cs_style_1 cs_type_1">
//             <div className="cs_section_heading_text">
//               <h2 className="cs_section_title anim_text_writting">
//                  {title}
//               </h2>
//             </div>
//           </div>
//           <div className="cs_height_100 cs_height_lg_60"></div>
//           <div className="cs_service_details">
//             <div className="cs_service_details_img">
//               <div className="cs_style_img">
//                 <Image src={banner_img} alt="service_details_banner" />
//               </div>
//             </div>
//             <div className="cs_service_details_text">
//               <div className="cs_service_details_p">
//                 <p className="anim_text">{des}</p>
//                 <ul className="anim_div_ShowDowns">
//                   {features?.map((item, i) => (
//                     <li key={i}>{item}</li>                    
//                   ))} 
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
//     </>
//   );
// };

// export default HeroServiceDetails;
// components/hero/HeroServiceDetails.tsx
import Image from "next/image";
import banner_img from "@/assets/img/service_details_banner.jpg";
import type { Service } from "@/lib/services";

type Props = { service: Service };

export default function HeroServiceDetails({ service }: Props) {
  const { title, des, features = [] } = service;

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120" />
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>

          <div className="cs_height_100 cs_height_lg_60" />

          <div className="cs_service_details">
            <div className="cs_service_details_img">
              <div className="cs_style_img">
                <Image src={banner_img} alt="Service details banner" />
              </div>
            </div>

            <div className="cs_service_details_text">
              <div className="cs_service_details_p">
                <p className="anim_text">{des}</p>

                {features.length > 0 && (
                  <ul className="anim_div_ShowDowns">
                    {features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
