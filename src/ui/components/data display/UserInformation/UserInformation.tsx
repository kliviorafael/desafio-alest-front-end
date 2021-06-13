import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  UserValor,
  UserQuantidade,
  AvatarStyled,
  UserCodigo,
} from "./UserInformation.style";

interface UserInformationProps {
  image: string;
  name: string;
  description: string;
  valor: number;
  quantidade: number;
  codigo: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled>{props.name[0]} </AvatarStyled>
      <UserName>Nome: {props.name} </UserName>
      <UserDescription>Descrição: {props.description} </UserDescription>
      <UserValor> R$: {props.valor} </UserValor>
      <UserQuantidade>Quantidade em estoque: {props.quantidade}</UserQuantidade>
      <UserCodigo> Código da Flor: {props.codigo} </UserCodigo>
    </UserInformationContainer>
  );
};

export default UserInformation;
