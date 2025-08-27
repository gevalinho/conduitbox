'use client'
import React, { useState } from 'react';
import award_img_1 from "@/assets/img/award_1.png";
import award_img_2 from "@/assets/img/award_2.png";
import award_img_3 from "@/assets/img/award_3.png";

import award_thumb_1 from "@/assets/img/award_thumb_1.jpg";
import award_thumb_2 from "@/assets/img/award_thumb_2.jpg";
import award_thumb_3 from "@/assets/img/award_thumb_3.jpg";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}[]

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: ``,
    title: `To think outside the box, always.`,
    des: `At The ConduitBox, we go beyond convention to craft bold branding, powerful digital presence, and innovative solutions in web and mobile app development. We’re committed to fresh ideas that set your brand apart.`,
  },
  {
    id: 2,
    ward_img: award_img_2,
    img: award_thumb_2,
    brand: ``,
    title: `To blend design with strategy for impact.`,
    des: `At The ConduitBox, we merge creativity with purposeful strategy to deliver branding, digital experiences, and technology solutions that don’t just look good, but drive real results.`,
  },
  {
    id: 3,
    ward_img: award_img_3,
    img: award_thumb_3,
    brand: ``,
    title: `To be not just service providers, but collaborators invested in your success.`,
    des: `At The ConduitBox, we work alongside you as partners, bringing creativity, strategy, and technology together to grow your brand and achieve lasting impact.`,
  },
]

const OurPromise = ({style_2}: any) => {

  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
    {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
                Our Promise
              </div>
              <h2 className="cs_section_title anim_heading_title">
                The unseen wiring — that connects businesses to ideas outside the box.
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) =>
              <div key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${activeTab === i ? 'active' : ''}`}>
                <div className="cs_card_left">
                  <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">
                      {item.des}
                    </div>
                  </div>
                </div>
                <div className="cs_card_right">
                  <h2 className="cs_card_brand">{item.brand}</h2>
                </div>
                <div className="cs_card_hover_img">
                  {/* <Image src={item.img} alt="Thumb" /> */}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default OurPromise;