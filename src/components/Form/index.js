import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {

  const [nome, setNome] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onMovieRegistered({ nome, sinopse, imagem, categoria });
    setNome('')
    setSinopse('')
    setImagem('')
    setCategoria('')
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o nome do filme"
          value={nome}
          onChanged={(value) => setNome(value)}
        />
        <TextField
          required={true}
          label="Sinopse"
          placeholder="Digite a sinopse do filme"
          value={sinopse}
          onChanged={(value) => setSinopse(value)}
        />
        <TextField
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChanged={(value) => setImagem(value)}
        />
        <Dropdown
          required={true}
          label="Categoria"
          items={props.categorias}
          value={categoria}
          onChanged={(value) => setCategoria(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
