import SafeEnvironment from "ui/components/feedback/SafeEnviroment/SafeEnviroment";
import PageTitle from "ui/components/data display/PageTitle/PageTitle";
import UserInformation from "ui/components/data display/UserInformation/UserInformation";
import TextField from "ui/components/inputs/TestField/TextField";
import { Button } from "@material-ui/core";
import { FormElementsContainer, TeladeCompra } from "./index.styles";
import useIndex from "data/hooks/pages/useindex.pages";

export default function Home() {
  const {
    nome,
    setNome,
    quantidade,
    setQuantidade,
    codigo,
    setCodigo,
    buscarFlor,
    compra,
    buscaFeita,
  } = useIndex();
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Teste Técnico - Klivio Rafael"}
        subtitle={"Criando API com Typescript + Node + React"}
      />

      <FormElementsContainer>
        <TextField
          label={"Código da flor:"}
          value={codigo}
          onChange={(event) => setCodigo(event.target.value)}
        />
        <TextField
          label={"Nome da flor:"}
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <TextField
          label={"Unidades de Compra:"}
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
        />
        <Button
          variant={"contained"}
          color={"secondary"}
          onClick={() => buscarFlor(codigo)}
        >
          Comprar
        </Button>
      </FormElementsContainer>

      {buscaFeita && (
        <TeladeCompra>
          <UserInformation
            name={setNome}
            description={"Sementes de rosa vermelhas, importadas"}
            valor={2}
            quantidade={setQuantidade}
            codigo={setCodigo}
          />
        </TeladeCompra>
      )}

      <UserInformation
        name={"rosa"}
        description={"Sementes de rosa vermelhas, importadas"}
        valor={2}
        quantidade={20}
        codigo={"6Hb5VuGZNRvbiKUfp6tB"}
      />
      <UserInformation
        name={"Margarida"}
        description={"Sementes de margaridas , nacionais"}
        valor={2}
        quantidade={20}
        codigo={"1Rup2zJZStkTGi3wcNG9"}
      />

      <UserInformation
        name={"Cravo"}
        description={"Sementes de cravos rendados, importadas"}
        valor={2}
        quantidade={20}
        codigo={"1Rup2zJZStkTGi3wcNG1"}
      />
    </div>
  );
}
