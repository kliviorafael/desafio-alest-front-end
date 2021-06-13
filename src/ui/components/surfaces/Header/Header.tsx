import React from "react";
import { HeaderAppBar } from "./Header.style";
import { Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar> Teste Técnico </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
