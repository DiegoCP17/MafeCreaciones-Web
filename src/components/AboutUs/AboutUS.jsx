import React from "react";
import {
  StyledBox,
  StyledImg,
  StyledtypographyTitle,
  Styledtypographyparagraph,
} from "./StyleAboutUs";

import AboutImg from "../../assets/AboutUs/AboutImg.png";



export const AboutUS = () => {
  return (
    <>
      <StyledtypographyTitle className="titulo" variant="h3">
        ¿Quiénes Somos?
      </StyledtypographyTitle>
      <StyledBox>
        <StyledImg
          alt="img"
          src={AboutImg}
        />
        <Styledtypographyparagraph variant="p">
          En Mafe Creaciones, somos apasionados por el arte con hilos y telas,
          especializándonos en tejidos en amigurumi. Nuestra empresa nace de la
          pasión por la artesanía y la decoracion, combinando la tradición con la
          innovación.<br/> <br />Desde nuestros inicios, nos hemos esforzado por ofrecer
          productos de alta calidad y diseño excepcional, incluyendo nuestra
          nueva línea de productos ecorenovables. Cada pieza que creamos
          refleja nuestra dedicación a la artesanía de precisión y a la
          expresión artística a través de textiles.<br/> <br />Nuestro equipo está formado
          por artesanos expertos que comparten una visión común: crear obras
          maestras que resalten la belleza de los hilos y las telas. Cada
          producto que sale de nuestro taller lleva consigo la dedicación y el
          amor que ponemos en cada puntada. <br /><br /> En Mafe Creaciones, no solo vendemos
          productos, sino que también compartimos nuestra pasión por el arte
          textil. Estamos aquí para inspirarte y brindarte piezas únicas que
          realcen tu estilo y tu hogar.
        </Styledtypographyparagraph>
      </StyledBox>
    </>
  );
};
