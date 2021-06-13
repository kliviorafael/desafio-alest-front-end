import { experimentalStyled as styled } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.palette.background.default};

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100px;
      color: black;
    }
  }
`;
