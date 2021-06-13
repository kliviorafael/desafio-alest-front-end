import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./footer.style";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle> Quem sou? </FooterTitle>
          <Typography variant={"body2"} sx={{ m: 2 }}>
            {" "}
            Me chamo Klivio Rafael, tenho 24 anos, Pernambucano mas moro em João
            Pessoa - PB, esta visualização faz parte do teste técnico realizado
            para processo de seleção de estágio da Alest{" "}
          </Typography>
        </Box>
        <FooterTitle> Muito Obrigado! </FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
