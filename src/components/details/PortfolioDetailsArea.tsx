

// components/details/PortfolioDetailsArea.tsx
import Image from "next/image";
import type { Portfolio } from "@/lib/portfolio";
import PortfolioPrevNext from "@/components/portfolio/PortfolioPrevNext";
import { StaticImageData } from 'next/image';


// import img1 from "@/assets/img/protfolio_details_1.jpg";
import img2 from "@/assets/img/portfoliodetails_2.jpg";
import img3 from "@/assets/img/portfoliodetails_1.jpg";
import img4 from "@/assets/img/portfolio_solution_1.jpg";
import img5 from "@/assets/img/portfolio_solution_2.jpg";
import img6 from "@/assets/img/portfolio_solution_3.jpg";
// import the_glen_h_img from "@/assets/img/theglensapartment.png";


type Props = { portfolio?: Portfolio };

export default function PortfolioDetailsArea({ portfolio }: Props) {
  const {
    slug = "",
    title = "Our Projects",
    des = "",
    client = "",
    detail_header_img,
    detail_challenge_img_1,
    detail_challenge_img_2,
    detail_solution_img,
    detail_solution_img2,
    detail_solution_img3,
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
                     {detail_header_img?.img && (
        <Image src={detail_header_img.img} alt={`${title} header`} />
              )}      
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
            {/* <Image src={img2} alt="Detail visual 1" /> */}
            {detail_challenge_img_1?.img && (
        <Image src={detail_challenge_img_1.img} alt={`${title} challenge`} />
              )}
          </div>
          <div className="reveal">
            {/* <Image src={img3} alt="Detail visual 2" /> */}
            {detail_challenge_img_2?.img && (
        <Image src={detail_challenge_img_2.img} alt={`${title} challenge`} />
              )}
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
                  {/* <Image src={img4} alt="Solution visual 1" /> */}
                  {detail_solution_img?.img && (
                    <Image src={detail_solution_img.img} alt={`${title} challenge`} />
                  )}
                </div>
                <div className="portfolio_solution_2 reveal">
                  {/* <Image src={img5} alt="Solution visual 2" /> */}
                  {detail_solution_img2?.img && (
                    <Image src={detail_solution_img2.img} alt={`${title} challenge`} />
                  )}
                </div>
                <div className="portfolio_solution_3 reveal">
                  {/* <Image src={img6} alt="Solution visual 3" /> */}
                  {detail_solution_img3?.img && (
                    <Image src={detail_solution_img3.img} alt={`${title} challenge`} />
                  )}
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
            basePath="/our-work-details"
          />
        </div>
      </div>
    </>
  );
}
