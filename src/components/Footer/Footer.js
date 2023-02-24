import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div>
      <a href="#HomePage">
        <div class="containerToTop rotate">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
        <p style={{ textAlign: "center" }}>Back to Top</p>

        <br></br>

        <p style={{ textAlign: "center" }}>
          This website was built by{" "}
          <a href="https://www.linkedin.com/in/thomas-augot/">Thomas Augot</a>
        </p>
      </a>
      <br></br>
    </div>
  );
}

export default Footer;
