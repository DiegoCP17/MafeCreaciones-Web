import React, { useState } from "react";

import MafeBanner from "../../assets/Banner/MafeBanner.png";
import MafeBanner2 from "../../assets/Banner/MafeBanner2.png";
import MafeBanner3 from "../../assets/Banner/MafeBanner3.png";

import {
  BannerContainer,
  BannerImage,
  StyledArrowBackIosIcon,
  StyledArrowForwardIosIcon,
} from "./StyleBanner";

export const Banner = () => {
  const images = [MafeBanner, MafeBanner2, MafeBanner3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const gotoPrevious = () => {
    const isFirtSlide = currentIndex === 0;
    const newIndex = isFirtSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <BannerContainer disableGutters>
      <BannerImage
        src={images[currentIndex]}
        alt="MafeBanners"
      />
      <StyledArrowBackIosIcon onClick={gotoPrevious} />
      <StyledArrowForwardIosIcon onClick={gotoNext} />
    </BannerContainer>
  );
};
