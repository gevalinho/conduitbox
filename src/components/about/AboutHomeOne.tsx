'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface ValueItem {
  heading: string;
  text: string;
}

interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des?: string;
  values?: ValueItem[];
}[]

const about_slider: DataType[] = [
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Mission",
    title: `The ConduitBox — where bold ideas spark powerful identities.`,
    des: `At The ConduitBox, our mission is to connect businesses with bold, creative, and effective ideas that inspire growth. We exist to design, build, and communicate identities that stand out, helping brands move beyond the ordinary and unlock their true potential.`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Vision",
    title: `The ConduitBox — connecting visionaries with growth.`,
    des: `To become a leading creative and digital partner for forward-thinking businesses across Africa and beyond — a hub where innovation meets strategy, and design becomes the bridge between vision and success`,
  },
  {
    img: "/assets/img/about_img.jpg",
    sub_title: "Our Values",
    title: `Designing with intent, delivering with impact.`,
    values: [
    {
      heading: "Creativity with Purpose",
      text: "We believe design is more than aesthetics; it is a powerful tool for clarity, impact, and transformation."
    },
    {
      heading: "Collaboration",
      text: "We work hand in hand with our clients, treating every project as a shared journey toward success."
    },
    {
      heading: "Excellence",
      text: "We hold ourselves to the highest standards in every deliverable, from a simple graphic to a complete brand system."
    },
    {
      heading: "Integrity",
      text: "Transparency, honesty, and professionalism guide every interaction."
    },
    {
      heading: "Innovation",
      text: "We constantly push boundaries, thinking outside the box to deliver solutions that are fresh, relevant, and future-focused."
    },
  ],
  },
 
]

const AboutHomeOne = () => {
  return (
    <>
      <div className="cs_height_130 cs_height_lg_60"></div>
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        }}
        pagination={{
          el: ".cs_pagination",
          clickable: true,
          type: "fraction",

          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> 
             ${' / '}
             <span class="${totalClass}"></span>`;
          },

        }}
        className="cs_slider cs_slider_2">
        {about_slider.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_about cs_style_1">
              <div className="cs_about_bg cs_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_about_text">
                  <div className="cs_section_heading cs_style_1">
                    <div className="cs_section_heading_text">
                      <div className="cs_section_subtitle">{item.sub_title}</div>
                      <h2 className="cs_section_title">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <div className="cs_height_40 cs_height_lg_30"></div>
                  {/* <p className="cs_m0">
                     
                      {item.values && item.values.length > 0 ? (
                      <ul>
                      {item.values.map((v, i) => (
                      <li key={i}>
                      <strong>{v.heading} – </strong>{v.text}
                        </li>
                                      ))}
                            </ul>
                          ) : (
                            <p className="cs_m0">{item.des}</p>
                          )}
                   
                  </p> */}
                    <>
                      {item.values && item.values.length > 0 ? (
                        <ul className="cs_m0">
                          {item.values.map((v, i) => (
                            <li key={i}>
                              <strong>{v.heading} – </strong>
                              {v.text}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="cs_m0">{item.des}</p>
                      )}
                    </>

                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="cs_swiper_controll">
            <div className="cs_pagination cs_style2 cs_primary_font"></div>
            <div className="cs_swiper_navigation_wrap">

              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_prev">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M82 1H2L24 23" stroke="currentColor" />
                </svg>
              </div>
              <div style={{ cursor: 'pointer' }} className="cs_swiper_button_next">
                <svg width="82" height="24" viewBox="0 0 82 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 23H80L58 1" stroke="currentColor" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default AboutHomeOne;