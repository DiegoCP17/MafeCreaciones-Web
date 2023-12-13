import React from "react";
import { Appbar } from "../components/appbar/Appbar";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import { AboutUS } from "../components/AboutUs/AboutUS";
import { Contact } from "../components/Contact/Contact";

import { Element } from "react-scroll";

export const Home = () => {
  return (
    <>
      <Appbar />
      <Element name="inicio">
        <Banner />
      </Element>
      <Element name="creaciones">
        <Gallery />
      </Element>
      <Element name="acerca de">
        <AboutUS />
      </Element>
      <Element name="contacto">
        <Contact />
      </Element>
    </>
  );
};
