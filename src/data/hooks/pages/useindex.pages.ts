import { useState } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ApiService } from "data/services/ApiService";

export default function useIndex() {
  const [codigo, setCodigo] = useState(" ");
  const [nome, setNome] = useState(" ");
  const [quantidade, setQuantidade] = useState(" "),
    [buscaFeita, setBuscaFeita] = useState(false),
    [carregando, setCarregando] = useState(false),
    [compra, setCompra] = useState([] as UserShortInterface[]);

  async function buscarFlor(nome: string) {
    setBuscaFeita(false);
    setCarregando(true);

    const { data } = await ApiService.post<{
      compra: UserShortInterface[];
      nome: string;
      quantidade: number;
      id: string;
    }>(
      "http://localhost:5000/back-end-firebase-74e2f/us-central1/clients/" +
        codigo
    );
    setNome(data.nome);
    setCodigo(data.id);
    setQuantidade(data.quantidade);

    setBuscaFeita(true);
  }

  return {
    nome,
    setNome,
    quantidade,
    setQuantidade,
    codigo,
    setCodigo,
    buscarFlor,
    compra,
    buscaFeita,
  };
}
