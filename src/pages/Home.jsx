import React from "react";
import { Appbar } from "../components/appbar/Appbar";
import { Banner } from "../components/Banner/Banner";
import { Gallery } from "../components/Gallery/Gallery";

export const Home = () => {
  return (
    <div>
      <Appbar />
      <Banner />
      <Gallery/>
    </div>
  );
};
