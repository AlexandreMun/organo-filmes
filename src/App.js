import { useState } from "react";
import Banner from "./components/Banner";
import Categoria from "./components/Categoria";
import Form from "./components/Form";

function App() {
  const categorias = [
    {
      nome: "Ação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      nome: "Comédia",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      nome: "Drama",
      primaryColor: "#ddec02",
      secondaryColor: "#f4f7c9",
    },
    {
      nome: "Romance",
      primaryColor: "#f761d6",
      secondaryColor: "#f1c7e8",
    },
  ];

  const inicial = [
    {
      nome: "Avengers: Infinity War",
      sinopse:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      imagem:
        "https://a.ltrbxd.com/resized/film-poster/2/2/6/6/6/1/226661-avengers-infinity-war-0-1000-0-1500-crop.jpg?v=8b35f60c0c",
      categoria: categorias[0].nome,
    },
    {
      nome: "Ferris Bueller’s Day Off",
      sinopse:
        "After high school slacker Ferris Bueller successfully fakes an illness in order to skip school for the day, he goes on a series of adventures throughout Chicago with his girlfriend Sloane and best friend Cameron, all the while trying to outwit his wily school principal and fed-up sister.",
      imagem:
        "https://a.ltrbxd.com/resized/film-poster/4/7/2/1/9/47219-ferris-bueller-s-day-off-0-1000-0-1500-crop.jpg?v=5c27745153",
      categoria: categorias[1].nome,
    },
    {
      nome: "La La Land",
      sinopse:
        "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      imagem:
        "https://a.ltrbxd.com/resized/film-poster/2/4/0/3/4/4/240344-la-la-land-0-1000-0-1500-crop.jpg?v=053670ff84",
      categoria: categorias[2].nome,
    },
    {
      nome: "From Russia with Love",
      sinopse:
        "Agent 007 is back in the second installment of the James Bond series, this time battling a secret crime organization known as SPECTRE. Russians Rosa Klebb and Kronsteen are out to snatch a decoding device known as the Lektor, using the ravishing Tatiana to lure Bond into helping them. Bond willingly travels to meet Tatiana in Istanbul, where he must rely on his wits to escape with his life in a series of deadly encounters with the enemy.",
      imagem:
        "https://a.ltrbxd.com/resized/sm/upload/nx/m3/w5/qo/nZ4XAOXaNHgyVRmmnlxzkjgVr9u-0-1000-0-1500-crop.jpg?v=dbea2601c4",
      categoria: categorias[0].nome,
    },
    {
      nome: "The Godfather",
      sinopse:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      imagem:
        "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/8/51818-the-godfather-0-1000-0-1500-crop.jpg?v=bca8b67402",
      categoria: categorias[2].nome,
    },
    {
      nome: "The Amazing Spider-Man",
      sinopse:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents’ disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father’s former partner. As Spider-Man is set on a collision course with Connors’ alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      imagem:
        "https://a.ltrbxd.com/resized/film-poster/5/0/6/7/7/50677-the-amazing-spider-man-0-1000-0-1500-crop.jpg?v=2e109aabed",
      categoria: categorias[0].nome,
    },
  ];

  const [movies, setMovies] = useState(inicial);

  const onNewMovieAdd = (movie) => {
    console.log(movie);
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      {/* <Banner /> */}
      {/* <Form onMovieRegistered={movie => onNewMovieAdd(movie)} /> */}
      <Form
        categorias={categorias.map((categoria) => categoria.nome)}
        onMovieRegistered={onNewMovieAdd}
      />
      {categorias.map((categoria) => (
        <Categoria
          key={categoria.nome}
          nome={categoria.nome}
          corPrimaria={categoria.primaryColor}
          corSecundaria={categoria.secondaryColor}
          filmes={movies.filter((movie) => movie.categoria === categoria.nome)}
        />
      ))}
    </div>
  );
}

export default App;
