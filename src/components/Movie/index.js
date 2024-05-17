import "./Movie.css";

const Movie = ({ nome, sinopse, imagem, titleColor }) => {
  return (
    <div className="movie">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4 style={{color: titleColor}}>{nome}</h4>
        <h5>{sinopse}</h5>
      </div>
    </div>
  );
};

export default Movie;
