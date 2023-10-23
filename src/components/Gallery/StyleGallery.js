import styled from "styled-components";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Container,
} from "@mui/material";

export const StyledCard = styled(Card)`
  max-width: 350px;
  margin-bottom: 30px;
  width: calc(33.33% - 20px);
  && {
    box-shadow: 20px 20px 20px -9px rgba(238, 131, 107, 0.8);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 20px 20px 20px -10px rgba(244, 0, 0, 0.3);
    transition: all 0.2s ease-in;
  }

  /* Media Query para pantallas más pequeñas */
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  /* Media Query para pantallas aún más pequeñas */
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const StyledCardActionArea = styled(CardActionArea)``;

export const StyledCardMedia = styled(CardMedia)`
  height: 350px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const StyledCardContent = styled(CardContent)`
  background-color: rgba(238, 131, 107, 0.6);
`;

export const StyledTypographyTitleSection = styled(Typography)`
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
`;

export const StyledTypographyTitleCard = styled(Typography)``;
export const StyledTypographyDescription = styled(Typography)``;

export const StyledCardActions = styled(CardActions)`
  background-color: rgba(238, 131, 107, 0.6);
  display: flex;
  justify-content: center;

  && {
    .bn632-hover {
      width: 160px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      margin: 20px;
      height: 55px;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      border-radius: 50px;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .bn632-hover:hover {
      background-position: 100% 0;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .bn632-hover:focus {
      outline: none;
    }

    .bn632-hover.bn27 {
      background-image: linear-gradient(
        to right,
        #ed6ea0,
        #ec8c69,
        #f7186a,
        #fbb03b
      );
      box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    }
  }
`;

export const StyledButton = styled(Button)``;

export const StyledContainer = styled(Container)`
  && {
    display: flex;
    margin-bottom: 5rem;
  }
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  align-content: center;
  justify-content: center;
`;
