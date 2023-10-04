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
  width: calc(33.33% - 20px);
  && {
    box-shadow: 20px 20px 20px -9px rgba(244, 0, 0, 0.4);
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
  text-align: center;
  && {
    margin-bottom: 50px;
  }
`;
export const StyledTypographyTitleCard = styled(Typography)``;
export const StyledTypographyDescription = styled(Typography)`
  // Estilos para el Typography si es necesario
`;

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
    margin-bottom: 50px;
  }
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  align-content: center;
`;
