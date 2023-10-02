import { Container } from "@mui/system";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const BannerContainer = styled(Container)`
  margin-bottom: 20px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
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
      font-size: 25px;
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
    }
  }
`;
