import React from "react";


//imagenes

import imagen1 from "../../assets/Gallery/imagen1.png";
import imagen2 from "../../assets/Gallery/imagen2.png";
import imagen3 from "../../assets/Gallery/imagen3.png";
import imagen4 from "../../assets/Gallery/imagen4.png";
import imagen5 from "../../assets/Gallery/imagen5.png";
import imagen6 from "../../assets/Gallery/imagen6.png";

//styled

import {
  StyledCard,
  StyledCardActionArea,
  StyledCardMedia,
  StyledCardContent,
  StyledCardActions,
  StyledButton,
  StyledContainer,
  StyledTypographyTitleSection,
  StyledTypographyTitleCard,
  StyledTypographyDescription,
} from "../Gallery/StyleGallery";

export const Gallery = () => {
  const cardsData = [
    {
      title: "Granjera",
      description: "hecho a mano con mucho amor.",
      image: imagen1,
    },
    {
      title: "Vikingos",
      description: "Mira esos Vikingos que rudos!",
      image: imagen2,
    },
    {
      title: "Gorro de lana",
      description: "Un lindo gorro para el frio",
      image: imagen3,
    },
    {
      title: "Medias",
      description: "Unas hermosas medias calentadoras en crochet",
      image: imagen4,
    },
    {
      title: "Perrito",
      description: "Este perrito esta hecho de trapo,¿ lindo no?",
      image: imagen5,
    },
    {
      title: "Gatito",
      description: "Un lindo gatito de tela, ¿ que te parece ?",
      image: imagen6,
    },
  ];

  return (
    <>
      <StyledTypographyTitleSection variant="h3">
        Nuestra Obra Maestra
      </StyledTypographyTitleSection>
      <StyledContainer>
        {cardsData.map((card, index) => (
          <StyledCard
            key={index}
            sx={{ maxWidth: 350 }}
          >
            <StyledCardActionArea>
              <StyledCardMedia
                component="img"
                height="350"
                image={card.image}
                alt={card.title}
                sx={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <StyledCardContent>
                <StyledTypographyTitleCard
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {card.title}
                </StyledTypographyTitleCard>
                <StyledTypographyDescription
                  variant="body2"
                  color="text.secondary"
                >
                  {card.description}
                </StyledTypographyDescription>
              </StyledCardContent>
            </StyledCardActionArea>
            <StyledCardActions>
              <StyledButton
                        size="small"
                        className="bn632-hover bn27"
                
              >
                ¡Lo quiero!
              </StyledButton>
            </StyledCardActions>
          </StyledCard>
        ))}
      </StyledContainer>
    </>
  );
};
