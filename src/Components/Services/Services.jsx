import React from "react";
import "./services.css";
import Theme from "../../assets/theme_pattern.svg";
import Services_data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function services() {
  return (
    <div id="skills" className="services">
      <div className="services-title">
        <h1> My Skills</h1>
        {/* <img src={Theme} alt="services-icon" /> */}
      </div>

      <div className="services-container">
        {Services_data.map((service, index) => {
          return (
            <div className="service-format" key={index}>
              <h3> {service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

              <div div className="service-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow-icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default services;
