import React from "react";
import MafeBanner from "../../assets/Banner/MafeBanner.png";
import { BannerContainer, BannerImage } from "./StyleBanner";

export const Banner = () => {
  return (
    <BannerContainer disableGutters>
      <BannerImage 
        src={MafeBanner}
        alt="MafeBanner"
      />
    </BannerContainer>
  );
};
