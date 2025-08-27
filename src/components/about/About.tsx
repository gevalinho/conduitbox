 

import React from 'react';
// import ShowMoreText from 'react-show-more-text';
import agency_story_1 from "@/assets/img/agency_story_1.jpg"
import agency_story_2 from "@/assets/img/agency_story_2.jpg"
import agency_story_4 from "@/assets/img/agency_story_4.jpg"
import agency_story_3 from "@/assets/img/agency_story_3.jpg"
import Image from 'next/image';



interface DataType {
  subtitle: string;
  title: string;
  des: string;
}
const about_content: DataType = {
  subtitle: `Our Story`,
  title: `Founded in July 2015 in Calabar, The ConduitBox was born out of a simple but powerful idea:`,
  des: `to be the “conduit” — the unseen wiring — that connects businesses to ideas outside the box.
At the time, Solomon was just beginning his professional journey as a designer, while Geva-Eval had already honed his craft in software and website development. Recognizing the strength in collaboration, we joined forces, pooling our talents to serve clients more effectively, more creatively, and more professionally.
What started as a partnership of two passionate creators has grown into a design and technology agency with a clear mission: to transform businesses through bold design, intelligent strategy, and innovative digital solutions.
From building timeless brand identities to designing seamless websites and interfaces, The ConduitBox has remained committed to helping startups, small businesses, and multinationals alike communicate their vision and scale with clarity and confidence.
But beyond services, we are partners in growth. We believe great ideas shouldn’t just look good — they should work, inspire, and move people. That’s the power of connection. That’s the power of The ConduitBox.
`,
}
const { subtitle, title, des } = about_content

const About = () => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div>
      <section>
        <div className="cs_primary_bg">
          <div className="container">
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="cs_section_heading_hr cs_style_1">
              <div className="cs_hr_design"></div>
              <div className="cs_section_heading cs_style_1 cs_color_1">
                <div className="cs_section_heading_text">
                  <h2 className="cs_section_title anim_heading_title">
                    {subtitle}
                  </h2>
                </div>
              </div>
              <div className="cs_hr_design"></div>
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="cs_section_heading cs_style_1 cs_color_1">
                    <div className="cs_section_heading_text">
                      <h3 className="cs_section_title_3 anim_div_ShowLeftSide">
                        {title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="anim_div_ShowRightSide">
                    <p className="cs_ternary_color">
                      {des}
                    </p>
                    <p className="cs_ternary_color">

                      {/* {des} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cs_height_385 cs_height_lg_120"></div>
          </div>
        </div>
        {/* <div className="container">
          <div className="cs_agency agency_about_images_posation">
            <div className="cs_img_section_1">
              <Image src={agency_story_1} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_2">
              <Image src={agency_story_2} alt="image-here" className="w-100" />
            </div>
            <div className="cs_img_section_3">
              <div className="text-end">
                <Image src={agency_story_4} alt="image-here" />
                <Image src={agency_story_3} className="w-100" alt="image-here" />
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default About;