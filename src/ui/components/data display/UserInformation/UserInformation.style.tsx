import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "avatar name"
    "avatar description"
    "avatar valor"
    "avatar quantidade"
    "avatar codigo";
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserValor = styled("div")`
  grid-area: valor;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const UserQuantidade = styled("div")`
  grid-area: quantidade;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const UserCodigo = styled("div")`
  grid-area: codigo;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
