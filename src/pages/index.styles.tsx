import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 500px;
  margin: ${({ theme }) => theme.spacing(2)} auto
    ${({ theme }) => theme.spacing(2)};
`;

export const TeladeCompra = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(7)};
`;
