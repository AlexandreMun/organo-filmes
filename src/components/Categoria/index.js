import Movie from "../Movie";
import "./Categoria.css";

const Categoria = (props) => {
  return props.filmes.length > 0 ? (
    <section
      className="categoria"
      style={{ backgroundColor: props.corSecundaria }}
    >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="filmes">
        {props.filmes.map((movie) => (
          <Movie
            titleColor={props.corPrimaria}
            key={movie.nome}
            nome={movie.nome}
            sinopse={movie.sinopse}
            imagem={movie.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Categoria;
