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
    width: 300px;
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
    left: 220px;
    background-color: rgba(238, 131, 107, 0.6);
  }

  &::after {
    right: 220px;
    background-color: rgba(238, 131, 107, 0.6);
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
  padding: 50px;
  background-color: rgba(238, 131, 107, 0.1);
  padding-top: 0px;
  padding-bottom: 0px;
  @media(max-width: 1024px) {
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
    @media(max-width: 1024px) {
    width: 100%;
  }
`;

export const Styledtypographyparagraph = styled(Typography)`
  padding: 40px;
  font-size: 1.2em;
  text-align: justify;
  line-height: 1.6;
`;
