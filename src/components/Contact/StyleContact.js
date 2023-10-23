import {
  Box,
  Container,
  Grid,
  Link,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const breakpoint = "768px"; // Definir un breakpoint

export const SectionContainer = styled(Container)`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 50px;

  @media (max-width: ${breakpoint}) {
    margin: 20px; // Reduzca el margen en pantallas más pequeñas
  }
`;

export const BoxContactForm = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: rgba(238, 131, 107, 0.2);
  box-shadow: 1px 9px 20px -5px;
  border-radius: 30px;

  .contactForm {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }

  .info {
    flex: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoint}) {
    flex-direction: column; // Cambiar a diseño de columna en pantallas más pequeñas
  }
`;

export const BoxForm = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 30px 30px 30px 30px;
  text-align: justify;

  @media (max-width: ${breakpoint}) {
    width: 80%; // Reduzca el ancho en pantallas más pequeñas
  }
`;

export const TypographyTitle = styled(Typography)`
  && {
    margin-bottom: 10px;
    font-size: 2em;
  }
  color: rgba(238, 131, 107, 1);

  @media (max-width: ${breakpoint}) {
    font-size: 1.5em; // Reduzca el tamaño de fuente en pantallas más pequeñas
  }
`;

export const Typographyparraf = styled(Typography)`
  && {
    margin-bottom: 20px;
    font-size: 1.2em;
  }

  @media (max-width: ${breakpoint}) {
    font-size: 1em; // Reduzca el tamaño de fuente en pantallas más pequeñas
  }
`;

export const InputBox = styled(Grid)`
  &.inputBox {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 15px;
  }

  @media (max-width: ${breakpoint}) {
    margin-bottom: 10px; // Reduzca el espacio entre elementos en pantallas más pequeñas
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    background: rgba(238, 131, 107, 0.2);
    color: red;
  }

  @media (max-width: ${breakpoint}) {
    font-size: 14px; // Reduzca el tamaño de fuente en pantallas más pequeñas
  }
`;

export const FieldsTypography = styled(Typography)`
  color: rgba(238, 131, 107, 1);
  && {
    margin-bottom: 10px;
  }

  @media (max-width: ${breakpoint}) {
    font-size: 16px; // Reduzca el tamaño de fuente en pantallas más pequeñas
  }
`;

export const TextArea = styled(TextareaAutosize)`
  && {
    width: 100%;
    min-height: 100px;
    padding: 8px;
    font-size: 20px;
    border: 1px;
    border-radius: 4px;
    background: rgba(238, 131, 107, 0.2);
    color: #98383a;
    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${breakpoint}) {
    font-size: 16px; // Reduzca el tamaño de fuente en pantallas más pequeñas
  }
`;

export const CustomButton = styled.button`
  background-color: rgba(238, 131, 107, 1);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 1px;

  &:hover {
    background-color: #ed575a;
  }

  display: block;
  margin: 0 auto;

  @media (max-width: ${breakpoint}) {
    font-size: 18px; 
  }
`;

export const Info = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ImgBox = styled(Box)`
  position: relative;
  width: 100%;
  height: 350px;
  margin: 40px 30px 30px 30px;

  @media (max-width: ${breakpoint}) {
    width: 100%; // Hacer que la imagen ocupe todo el ancho en pantallas más pequeñas
    height: auto; // Permitir que la altura se ajuste automáticamente
    margin: 20px; // Reduzca el margen en pantallas más pequeñas
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 1px 9px 20px -5px;

  @media (max-width: ${breakpoint}) {
    border-radius: 0; // Eliminar el redondeo de la imagen en pantallas más pequeñas
  }
`;

export const TextBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const InfoContact = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 10px;
  color: rgba(238, 131, 107, 1);
`;

export const StyledLink = styled(Link)`
  color: rgba(238, 131, 107, 1);
`;

export const Parraf = styled(Typography)``;

export const RedesSociales = styled(Box)`
  padding: 20px;
  font-size: 2em;
  display: flex;
`;

export const LinkRS = styled(Link)`
  color: rgba(238, 131, 107, 1);
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease, font-size 0.3s ease,
    margin-right 0.3s ease;
  && {
    margin-right: 10px;
  }

  &:hover {
    color: #ed575a;
    transform: scale(1.4);
  }
`;
