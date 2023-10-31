import { Alert, Box, Grid } from "@mui/material";
import React, { useState, useRef } from "react";
import axios from "axios";

import {
  BoxContactForm,
  BoxForm,
  ContainerStyled,
  CustomButton,
  FieldsTypography,
  ImgBox,
  Info,
  InfoContact,
  InputBox,
  LinkRS,
  RedesSociales,
  SectionContainer,
  StyledImg,
  StyledLink,
  StyledTextField,
  TextArea,
  TextBox,
  TextStyled,
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
  const formRef = useRef(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    formRef.current.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Datos del formulario
    const formData = new FormData(formRef.current);

    // Validación de campos
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) {
      setErrorAlert(true);
      setErrorMessage("Por favor, complete todos los campos requeridos.");
    } else {
      try {
        // Realiza la solicitud HTTP POST
        const response = await axios.post(
          "https://formsubmit.co/b8396308100d58734864941f9d3de4ad", //Agregar correo de mafecreaciones 
          formData
        );

        // Verifica la respuesta para confirmar el éxito
        if (response.status === 200) {
          // Cuando el envío es exitoso, muestra el mensaje de éxito
          setSuccessAlert(true);
          setErrorAlert(false); // Oculta la alerta de error si estaba visible
          resetForm(); // Resetea el formulario
        }
      } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la solicitud
        setErrorAlert(true);
        setErrorMessage("Hubo un error al enviar el formulario.");
        console.error("Error al enviar el formulario:", error);
      }
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "573192994843";
    const message =
      "Hola, estoy interesado en tus Creaciones 🧶🧵, Quisiera recibir mas información 📄 ";
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappURL;
  };

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

            <form
              ref={formRef}
              action="https://formsubmit.co/b8396308100d58734864941f9d3de4ad"
              method="POST"
              onSubmit={handleSubmit}
            >
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
                    name="name"
                    required
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
                    name="email"
                    required
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
                    name="message"
                  />
                </InputBox>
                <CustomButton onClick={handleSubmit}>Enviar</CustomButton>
              </Grid>
              <br />
              <Alert
                severity="success"
                onClose={() => setSuccessAlert(false)}
                style={{ display: successAlert ? "flex" : "none" }}
              >
                Mensaje enviado con éxito.
              </Alert>
              <Alert
                severity="error"
                onClose={() => setErrorAlert(false)}
                style={{ display: errorAlert ? "flex" : "none" }}
              >
                {errorMessage}
              </Alert>
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000"
              />
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />
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
              <StyledLink
                href={`https://www.google.com/maps?q=${encodeURIComponent(
                  "Cl. 114 # 68A 45, Florencia, Medellín, Antioquia"
                )}`}
                target="_blank"
                underline="hover"
                rel="noopener noreferrer"
                color=""
              >
                Cl. 114 # 68A 45, Florencia, Medellín, Antioquia
              </StyledLink>
            </InfoContact>

            <InfoContact>
              <EmailTwoToneIcon
                sx={{ color: red["A100"], fontSize: 30, mr: 1 }}
              />
              <StyledLink
                href="mailto: diego.cordoba@metanoiainnovation.com"// falta correo de mafe creaciones 
                underline="hover"
                target="_blank"
                color=""
                rel="noopener noreferrer"
              >
                Contacto@mafecreaciones.com
              </StyledLink>
            </InfoContact>
            <InfoContact>
              <PhoneAndroidTwoToneIcon
                sx={{ color: red["A100"], fontSize: 30, mr: 1 }}
              />
              <StyledLink
                onClick={handleWhatsAppClick}
                target="_blank"
                underline="hover"
                rel="noopener noreferrer"
                color=""
              >
                (+57) 319 2994843
              </StyledLink>
            </InfoContact>
          </TextBox>
          <RedesSociales>
            <LinkRS
              href="https://www.facebook.com/mafecreacionesmedellin"
              underline="hover"
              target="_blank"
              color=""
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </LinkRS>
            <LinkRS
              href="https://www.instagram.com/mafecreaciones/"
              underline="hover"
              target="_blank"
              color=""
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </LinkRS>
            <LinkRS
              href="https://www.pinterest.jp/mafecreacionesm/_created/"
              underline="hover"
              target="_blank"
              color=""
              rel="noopener noreferrer"
            >
              <PinterestIcon />
            </LinkRS>
            <LinkRS
              onClick={handleWhatsAppClick}
              underline="hover"
              target="_blank"
              color=""
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </LinkRS>
            <LinkRS
              href="https://www.youtube.com/channel/UC_QFI08FWeNWW3CLeXJM5Cg"
              underline="hover"
              target="_blank"
              color=""
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </LinkRS>
          </RedesSociales>
        </Info>
      </BoxContactForm>
      <ContainerStyled>
        <TextStyled>
          Copyright © 2023 Mafecreaciones.com™ - Todos los derechos reservados.
        </TextStyled>
      </ContainerStyled>
    </SectionContainer>
  );
};
