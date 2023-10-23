import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box/Box";

export const StyledtypographyTitle = styled(Typography)`
  display: flex;
  position: relative;
  justify-content: center;
  font-style: italic;
  cursor: pointer;

  && {
    margin-bottom: 50px;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15%;
    height: 4px;
    background-color: black;
    top: 50%;
    transform: scale(0);
    transition: all 0.4s ease-in;
  }

  &:hover::before,
  &:hover::after {
    transform: scale(1);
  }
  &::before {
    left: 15%;
    background-color: rgba(238, 131, 107, 0.6);
  }

  &::after {
    right: 15%;
    background-color: rgba(238, 131, 107, 0.6);
  }

  @media (max-width: 400px) {
    && {
      font-size: 30px;
    }
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: rgba(238, 131, 107, 0.1);
  padding-top: 0px;
  padding-bottom: 0px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const StyledImg = styled.img`
  max-width: 450px;
  max-height: 600px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 9px 20px -5px;
  && {
    height: 450px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 20px 20px 20px -10px rgba(238, 131, 107, 0.8);
  }
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%; /* Añade esto para que la imagen sea 100% de ancho */
    display: block; /* Añade esto para que la imagen sea centrada */
    margin: 0 auto; /* Añade esto para centrar horizontalmente */
    margin-top: 50px;
  }
`;

export const Styledtypographyparagraph = styled(Typography)`
  padding: 40px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.1em;
  }

  @media (max-width: 600px) {
    font-size: 1.0em;
  }
`;
