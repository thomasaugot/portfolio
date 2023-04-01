import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a href="#HomePage">
        <div class="containerToTop rotate">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
        <p style={{ textAlign: "center" }}>Back to Top</p>
      </a>
      <br></br>

      <p style={{ textAlign: "center", color: "white" }}>
        Copyright © 2023 <a href="https://www.linkedin.com/in/thomas-augot/"> Thomas Augot</a>.
        <br></br>All rights reserved.
      </p>

      <br></br>
    </div>
  );
}

export default Footer;
