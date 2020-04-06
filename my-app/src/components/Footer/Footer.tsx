import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer
          className="section footer-classic context-dark bg-image"
          style={{ background: "#2d3246", color: "#fff" }}
        >
          <p>Footer.</p>
        </footer>
      </div>
    );
  }
}
export default Footer;
