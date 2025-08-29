// "use client";


// import React from 'react';

// import Image from 'next/image';
// import type { Portfolio } from '@/lib/portfolio';
// import PortfolioPrevNext from "@/components/portfolio/PortfolioPrevNext";

// import protfolio_details_1 from "@/assets/img/protfolio_details_1.jpg"; 
// import protfolio_details_2 from "@/assets/img/portfoliodetails_2.jpg"; 
// import protfolio_details_3 from "@/assets/img/portfoliodetails_1.jpg"; 
// import protfolio_details_4 from "@/assets/img/portfolio_solution_1.jpg"; 
// import protfolio_details_5 from "@/assets/img/portfolio_solution_2.jpg"; 
// import protfolio_details_6 from "@/assets/img/portfolio_solution_3.jpg"; 


// type Props = { portfolio?: Portfolio };


// const PortfolioDetailsArea = ({ portfolio }: Props) => {
//   const title = portfolio?.title ?? "Our Portfolio";
//   const des = portfolio?.des ?? "";
//   const client = portfolio?.client ?? "";
//   const challenge = portfolio?.challenge ?? "";
//   const solution = portfolio?.solution ?? "";
//   const features = portfolio?.features ?? [];
//   const technologies = portfolio?.technologies ?? [];
//   const service = portfolio?.service ?? [];
//   const date = portfolio?.date ?? "";
//   const impact = portfolio?.impact ?? "";
//   const impact_features = portfolio?.impact_features ?? [];
//   const deliverables = portfolio?.deliverables ?? [];
//   return (
//     <>
//       <div className="cs_height_219 cs_height_lg_120"></div> 
//       <section>
//         <div className="container">
//           <div className="cs_section_heading cs_style_1 cs_type_1  d-flex align-items-center justify-content-between
//               gap-5 flex-wrap">
//             <div className="cs_section_heading_text">
//               <h2 className="cs_section_title anim_text_writting m-0 text-break">{title}</h2>
//               {des && (
//                 <p className="cs_section_subtitle m-0">{des}</p>
//               )}
//             </div>
//             <div className="cs_section_heading_right cs_btn_anim">
//               <div className="cs_btn cs_style_2 anim_div_ShowZoom">
//                 <a target='_blank' href="https://behance.com"   className="col cs_center">Behance</a>
//                 <a target='_blank' href="https://dribbble.com"   className="col cs_center">Dribbble</a>
//                 <a target='_blank' href="https://github.com"   className="col cs_center">Github</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
//       <div className="cs_height_100 cs_height_lg_60"></div>
 
//       <section>
//         <div className="container">
//           <div className="anim_blog">
//             <div className="cs_portfolio_details">
//               <div className="row">
//                 <div className="col-md-4">
//                   <div className="cs_text_style_1">
//                     <p className="cs_headed_text">Client</p>
//                     <h6 className="cs_title_text">
//                       {/* Faulsk Company Inc <br /> Canada */}
//                       {client}
//                     </h6>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="cs_text_style_1">
//                     <p className="cs_headed_text">Services</p>
//                     <h6 className="cs_title_text">
//                       {/* UX Research, Wireframing,<br /> UI Design */}
//                       {service?.join(", ")}
//                     </h6>
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="cs_text_style_1">
//                     <p className="cs_headed_text">Date</p>
//                     <h6 className="cs_title_text">
//                       05 Dec 2022 - 01 Jan 2023 <br /> 1 Month
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
//       <div className="cs_height_75 cs_height_lg_45"></div>
 
//       <section>
//         <div className="container">
//           <div className="cs_portfolio_details">
//             <div className="reveal">
//               <Image src={protfolio_details_1} alt="protfolio_details_1" />
//             </div>
//             <div className="cs_height_100 cs_height_lg_60"></div>
//             <div className="anim_div_ShowDowns">
//               <div className="cs_img_show_text cs_text_style_1">
//                 <h4 className="cs_heading_text anim_heading_title">Challanges</h4>
//                 <p className="cs_text_style_body">
//                   {/* Welcome to our digital agency! We specialize in helping businesses like yours succeed
//                   online. From website design and development to digital marketing and adver tising, we
//                   have the tools and expertise to elevate your online presence. Welcome to our digital
//                   agency! We specialize in helping businesses like yours online. From website design and
//                   development to digital marketing and advertising, we have the tools and expertise to
//                   elevate your online presence. Welcome to our digital
//                   agency! We specialize in helping businesses like yours succeed online. */}
//                   {challenge}
//                 </p>
//               </div>
//               {/* <div className="cs_ul_ml">
//                 <ul>
//                   <li>Design Welcome to our digital agency!</li>
//                   <li>
//                     Dev online. From website design Implementation world of digital.
//                   </li>
//                   <li>
//                     Implementation evolving world of digital Design Welcome to our digital agency!
//                   </li>
//                   <li>
//                     Launch growth and reach your goals. Implementation evolving world of digital.
//                   </li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </section> 
//       <div className="cs_height_75 cs_height_lg_45"></div>
 
//       <div className="container">
//         <div className="d-flex gap-2 gap-md-5">
//           <div className="reveal">
//             <Image src={protfolio_details_2} alt="portfoliodetails_2" />
//           </div>
//           <div className="reveal">
//             <Image src={protfolio_details_3} alt="portfoliodetails_1" />
//           </div>
//         </div>
//       </div> 
//       <div className="cs_height_150 cs_height_lg_60"></div>
 
//       <section>
//         <div>
//           <div className="container">
//             <div className="cs_portfolio_details">
//               <div className="cs_solutions_section anim_div_ShowDowns">
//                 <div>
//                   <h4 className="cs_heading_text anim_heading_title">
//                     Solutions
//                   </h4>
//                   <p className="cs_text_style_body">
//                     {solution}
//                   </p>
//                 </div>

//                  <div className="cs_ul_ml">
//                { features && features.length > 0 && (
//                   <ul className="cs_ul_ml">
//                     {features.map((item, i) => (
//                       <li key={i}>
//                         <strong>{item.heading} – </strong>
//                         {item.text}
//                       </li>                    
//                     ))} 
//                   </ul>
//                 ) }
//               </div>

//                 <div className="cs_solutions_section_img_show">
//                   <div className="portfolio_solution_1 reveal">
//                     <Image src={protfolio_details_4} alt="portfolio_solution_1" />
//                   </div>
//                   <div className="portfolio_solution_2 reveal">
//                     <Image src={protfolio_details_5} alt="portfolio_solution_2" />
//                   </div>
//                   <div className="portfolio_solution_3 reveal">
//                     <Image src={protfolio_details_6} alt="portfolio_solution_3" />
//                   </div>
//                 </div>
//                 {/* <div className="cs_img_footer_title cs_color_1 anim_text_upanddowns">
//                   <p>The End - thank you stay with us!</p>
//                 </div> */}
//                 <div className="mt-5">
//                 <div className="cs_solutions_section anim_div_ShowDowns">
//                 <div>
//                   <h4 className="cs_heading_text anim_heading_title ">
//                     The Impact
//                   </h4>
//                   <p className="cs_text_style_body">
//                     {impact}
//                   </p>
//                 </div>

//                  <div className="cs_ul_ml">
//                { features && features.length > 0 && (
//                   <ul className="cs_ul_ml">
//                     {impact_features.map((item, i) => (
//                       <li key={i}>
                      
//                         {item}
//                       </li>                    
//                     ))} 
//                   </ul>
//                 ) }
//               </div>
//               </div>
//               </div>

// <div className="mt-5">
//                 <div className="cs_solutions_section anim_div_ShowDowns">
//                 <div>
//                   <h4 className="cs_heading_text anim_heading_title ">
//                     Deliverales 
//                   </h4>
//                   {/* <p className="cs_text_style_body">
                    
//                   </p> */}
//                 </div>

//                  <div className="cs_ul_ml">
//                { deliverables && deliverables.length > 0 && (
//                   <ul className="cs_ul_ml">
//                     {deliverables.map((item, i) => (
//                       <li key={i}>
                      
//                         {item}
//                       </li>                    
//                     ))} 
//                   </ul>
//                 ) }
//               </div>
//               </div>
//               </div>

                
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> 
 
//       <div className="container">
//         <div className="cs_portfolio_details">
//           <div className="cs_section_next_prv anim_div_ShowZoom">
//             <div className="cs_prv_btn">
//               <a href="#">Previous</a>
//             </div>
//             <div>|</div>
//             <div className="cs_next">
//               <a href="#">Next Project</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PortfolioDetailsArea;

// components/details/PortfolioDetailsArea.tsx
import Image from "next/image";
import type { Portfolio } from "@/lib/portfolio";
import PortfolioPrevNext from "@/components/portfolio/PortfolioPrevNext";

import img1 from "@/assets/img/protfolio_details_1.jpg";
import img2 from "@/assets/img/portfoliodetails_2.jpg";
import img3 from "@/assets/img/portfoliodetails_1.jpg";
import img4 from "@/assets/img/portfolio_solution_1.jpg";
import img5 from "@/assets/img/portfolio_solution_2.jpg";
import img6 from "@/assets/img/portfolio_solution_3.jpg";

type Props = { portfolio?: Portfolio };

export default function PortfolioDetailsArea({ portfolio }: Props) {
  const {
    slug = "",
    title = "Our Portfolio",
    des = "",
    client = "",
    challenge = "",
    solution = "",
    features = [], // [{ heading, text }]
    technologies = [], // optional array
    service: services = [], // optional array
    date = "",
    impact = "",
    impact_features = [], // string[]
    deliverables = [], // string[]
  } = portfolio ?? {};

  return (
    <>
      <div className="cs_height_219 cs_height_lg_120" />

      {/* Header: title + actions */}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 d-flex align-items-center justify-content-between gap-5 flex-wrap">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting m-0 text-break">
                {title}
              </h2>
              {des && <p className="cs_section_subtitle m-0">{des}</p>}
            </div>

            <div className="cs_section_heading_right cs_btn_anim">
              <div className="cs_btn cs_style_2 anim_div_ShowZoom">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://behance.com"
                  className="col cs_center"
                >
                  Behance
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dribbble.com"
                  className="col cs_center"
                >
                  Dribbble
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com"
                  className="col cs_center"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60" />

      {/* Meta row */}
      <section>
        <div className="container">
          <div className="anim_blog">
            <div className="cs_portfolio_details">
              <div className="row">
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Client</p>
                    <h6 className="cs_title_text">{client}</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Services</p>
                    <h6 className="cs_title_text">{services.join(", ")}</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_text_style_1">
                    <p className="cs_headed_text">Date</p>
                    <h6 className="cs_title_text">{date || "—"}</h6>
                  </div>
                </div>
              </div>

              {technologies.length > 0 && (
                <div className="row mt-3">
                  <div className="col-12">
                    <div className="cs_text_style_1">
                      <p className="cs_headed_text">Tech</p>
                      <h6 className="cs_title_text">{technologies.join(", ")}</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_75 cs_height_lg_45" />

      {/* Hero image + Challenge */}
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={img1} alt="Portfolio hero visual" />
            </div>

            <div className="cs_height_100 cs_height_lg_60" />

            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Challenges</h4>
                <p className="cs_text_style_body">{challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_75 cs_height_lg_45" />

      {/* Two-up visuals */}
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div className="reveal">
            <Image src={img2} alt="Detail visual 1" />
          </div>
          <div className="reveal">
            <Image src={img3} alt="Detail visual 2" />
          </div>
        </div>
      </div>

      <div className="cs_height_150 cs_height_lg_60" />

      {/* Solutions + features + gallery + impact + deliverables */}
      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="cs_solutions_section anim_div_ShowDowns">
              <div>
                <h4 className="cs_heading_text anim_heading_title">Solutions</h4>
                <p className="cs_text_style_body">{solution}</p>
              </div>

              {features.length > 0 && (
                <div className="cs_ul_ml">
                  <ul className="cs_ul_ml">
                    {features.map((item: any, i: number) => (
                      <li key={i}>
                        {item?.heading && <strong>{item.heading} – </strong>}
                        {item?.text ?? String(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="cs_solutions_section_img_show">
                <div className="portfolio_solution_1 reveal">
                  <Image src={img4} alt="Solution visual 1" />
                </div>
                <div className="portfolio_solution_2 reveal">
                  <Image src={img5} alt="Solution visual 2" />
                </div>
                <div className="portfolio_solution_3 reveal">
                  <Image src={img6} alt="Solution visual 3" />
                </div>
              </div>

              {/* Impact */}
              {(impact || impact_features.length > 0) && (
                <div className="mt-5 cs_solutions_section anim_div_ShowDowns">
                  <div>
                    <h4 className="cs_heading_text anim_heading_title">The Impact</h4>
                    {impact && <p className="cs_text_style_body">{impact}</p>}
                  </div>

                  {impact_features.length > 0 && (
                    <div className="cs_ul_ml">
                      <ul className="cs_ul_ml">
                        {impact_features.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Deliverables */}
              {deliverables.length > 0 && (
                <div className="mt-5 cs_solutions_section anim_div_ShowDowns">
                  <div>
                    <h4 className="cs_heading_text anim_heading_title">Deliverables</h4>
                  </div>
                  <div className="cs_ul_ml">
                    <ul className="cs_ul_ml">
                      {deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div className="container">
        <div className="cs_portfolio_details">
          <PortfolioPrevNext
            currentSlug={slug}
            bounded={false}
            // Adjust basePath to your route:
            // if your detail route is /portfolio-details/[slug], use "/portfolio-details"
            basePath="/portfolio-details"
          />
        </div>
      </div>
    </>
  );
}
