import React from "react";
import { Appbar } from "../components/appbar/Appbar";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";
import { AboutUS } from "../components/AboutUs/AboutUS";
import { Contact } from "../components/Contact/Contact";

export const Home = () => {
  return (
    <div>
      <Appbar />
      <Banner />
      <Gallery />
      <AboutUS />
      <Contact />
    </div>
  );
};
