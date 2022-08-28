import React from "react";
import Icons from "../Icons";

import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <span>
        <a href="https://twitter.com/anselm_co">
          <Icons icon="twitter" />
        </a>

        <a href="https://facebook.com/anselm.co">
          <Icons icon="facebook" />
        </a>

        <a href="https://instagram.com/anselm_co">
          <Icons icon="instagram" />
        </a>

        <a href="https://github.com/anxem">
          <Icons icon="gitgub" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
