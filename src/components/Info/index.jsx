import React from "react";
import "./styles.css";

import Icons from "../Icons";

const Info = () => {
  return (
    <div className="info-wrapper">
      <div className="display-pic-holder"></div>

      <h1>Obilor C. Anselm</h1>
      <h3>Frontend Developer</h3>

      <a href="https://obiloranselm.com">anselmobilor.com</a>

      <div className="btn-holder">
        <a href="mailto:anselmco.lr@gmail.com">
          <button className="btn">
            <span>
              <Icons icon="mail" />
            </span>
            <span>Email</span>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/chibuzor-obilor-41144211b">
          <button className="btn-s">
            <span>
              <Icons icon="linkedin" />
            </span>
            <span>LinkedIn</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
