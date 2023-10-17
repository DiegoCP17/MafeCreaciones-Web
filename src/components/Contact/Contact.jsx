import { Box, Grid } from "@mui/material";
import React from "react";
import {
  BoxContactForm,
  BoxForm,
  CustomButton,
  FieldsTypography,
  ImgBox,
  Info,
  InfoContact,
  InputBox,
  LinkRS,
  Parraf,
  RedesSociales,
  SectionContainer,
  StyledImg,
  StyledLink,
  StyledTextField,
  TextArea,
  TextBox,
  TypographyTitle,
  Typographyparraf,
} from "./StyleContact";

import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import PhoneAndroidTwoToneIcon from "@mui/icons-material/PhoneAndroidTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

import ImgContacto from "../../assets/Contact/ImgContacto.jpg";
import { red } from "@mui/material/colors";

export const Contact = () => {
  return (
    <SectionContainer fixed>
      <BoxContactForm
        component="div"
        className="contactForm"
      >
        <BoxForm className="form">
          <Box className="texto">
            <TypographyTitle variant="h3">¡Contactenos!</TypographyTitle>
            <Typographyparraf>
              Tu opinión, preguntas y comentarios son muy importantes para
              nosotros. Por favor, completa el formulario a continuación, y
              estaremos encantados de responderte lo antes posible.
            </Typographyparraf>

            <form action="">
              <Grid
                className="form-2"
                container
                spacing={2}
              >
                <InputBox
                  item
                  xs={12}
                  className="inputBox"
                >
                  <FieldsTypography variant="h6">Tu Nombre</FieldsTypography>
                  <StyledTextField
                    for=""
                    label="Nombre..."
                    type="text"
                    fullWidth
                  />
                </InputBox>
                <InputBox
                  item
                  xs={12}
                  className="inputBox"
                >
                  <FieldsTypography variant="h6">Tu Correo</FieldsTypography>
                  <StyledTextField
                    for=""
                    label="Correo..."
                    type="text"
                    fullWidth
                  />
                </InputBox>
                <InputBox
                  item
                  xs={12}
                  className="inputBox"
                >
                  <FieldsTypography variant="h6">Tu Mensaje</FieldsTypography>
                  <TextArea
                    placeholder="Escribe tu mensaje Aqui"
                    maxRows={5}
                  />
                </InputBox>
                <CustomButton>Enviar</CustomButton>
              </Grid>
            </form>
          </Box>
        </BoxForm>
        <Info>
          <ImgBox>
            <StyledImg src={ImgContacto} />
          </ImgBox>
          <TextBox>
            <InfoContact>
              <MapTwoToneIcon
                sx={{ color: red["A100"], fontSize: 30, mr: 1 }}
              />
              <Parraf>Cl. 114 # 68A 45, Florencia, Medellín, Antioquia</Parraf>
            </InfoContact>
            <InfoContact>
              <PhoneAndroidTwoToneIcon
                sx={{ color: red["A100"], fontSize: 30, mr: 1 }}
              />
              <Parraf>(+57) 319 2994843</Parraf>
            </InfoContact>
            <InfoContact>
              <EmailTwoToneIcon
                sx={{ color: red["A100"], fontSize: 30, mr: 1 }}
              />
              <StyledLink
                href="https://www.instagram.com/mafecreaciones/"
                underline="hover"
                target="_blank"
                color=""
              >
                Contacto@mafecreaciones.com
              </StyledLink>
            </InfoContact>
          </TextBox>
          <RedesSociales>
            <LinkRS
              href="https://www.facebook.com/mafecreacionesmedellin"
              underline="hover"
              target="_blank"
              color=""
            >
              <FacebookIcon />
            </LinkRS>
            <LinkRS
              href="https://www.instagram.com/mafecreaciones/"
              underline="hover"
              target="_blank"
              color=""
            >
              <InstagramIcon />
            </LinkRS>
            <LinkRS
              href="https://www.pinterest.jp/mafecreacionesm/_created/"
              underline="hover"
              target="_blank"
              color=""
            >
              <PinterestIcon />
            </LinkRS>
            <LinkRS
              href="https://api.whatsapp.com/send/?phone=573192994843&text&type=phone_number&app_absent=0"
              underline="hover"
              target="_blank"
              color=""
            >
              <WhatsAppIcon />
            </LinkRS>
            <LinkRS
              href="https://www.youtube.com/channel/UC_QFI08FWeNWW3CLeXJM5Cg"
              underline="hover"
              target="_blank"
              color=""
            >
              <YouTubeIcon />
            </LinkRS>
          </RedesSociales>
        </Info>
      </BoxContactForm>
    </SectionContainer>
  );
};
