import React from "react";
import illustrated_profile from "../images/illustrated_profile.svg";

import { Image, Container } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";

function Header() {
  return (
    <div className="outer-layer-container">
      <div
        id="headerSection"
        className="d-flex main-header-container mb-4"
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          className="d-flex subheader-container p-4 text-center"
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={illustrated_profile}
            alt="Profile"
            style={{ maxWidth: "20em", minWidth: "15em" }}
          />
          <h1 className="my-0" style={{ fontWeight: "500" }}>
            Developer & Designer
          </h1>
          <p className="my-0" style={{ fontSize: "1.5em", fontWeight: "300" }}>
            Hello, World. My name is Amah and I am a developer with a passion to
            build solutions that makes our world a better place. <br />{" "}
            <FcGlobe className="globeIcon" />
          </p>
          <div
            className="d-flex"
            style={{ flexDirection: "column", justifyContent: "center" }}
          >
            <a href="#skillSection" style={{ color: "rgb(79, 19, 105)" }}>
              <p
                className="m-0 mt-3"
                style={{
                  fontSize: "1.3em",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Learn More
              </p>
              <FaChevronDown
                className="chevronIcon"
                style={{ fontSize: "1.8em" }}
              />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Header;