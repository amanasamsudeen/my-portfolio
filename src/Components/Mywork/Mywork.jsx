import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";

function Mywork() {
  return (
    <div id="hackathons" className="mywork">
      <div className="mywork-title">
        <h1>Hackathons & Awards</h1>
        <img src={theme_pattern} />
      </div>
      <div className="mywork-format">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} />;
        })}
      </div>
    </div>
  );
}

export default Mywork;
