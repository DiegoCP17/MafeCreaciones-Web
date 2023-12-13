import { Container } from "@mui/system";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const BannerContainer = styled(Container)`
  width: 1400px;
  height: 429px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-bottom: 50px;
  background: linear-gradient(
    40deg,
    rgba(125, 221, 238, 0.4),
    rgba(238, 131, 107, 0.4)
  );
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 10px;
  object-fit: contain; /* Establece object-fit en "cover" */
  max-width: 1400px;
  max-height: 500px;
`;

export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
  && {
    position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    right: 160px;
    font-size: 45px;
    color: #000;
    cursor: pointer;

    @media (max-width: 768px) {
      right: 10%;
      font-size: 25px;
    }

    &:hover {
      font-size: 55px;
      color: #7ddbee;
    }
  }
`;

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  && {
    position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    left: 160px;
    font-size: 45px;
    color: #000;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 25px;
      left: 10%;
    }

    &:hover {
      font-size: 55px;
      color: #ee836b;
    }
  }
`;
