import { Container } from "@mui/system";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const BannerContainer = styled(Container)`
  width: 1400px;
  height: 500px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  display: block; /* Establece el elemento como bloque para que ocupe el espacio disponible */
  border-radius: 10px;
  object-fit: fill;
  position: relative;
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
