import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieGenre, setMovieGenre] = useState([]);
  const [movie3, setMovie3] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movie_id, setMovie_id] = useState(16);
  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };
  const genreClick = () => {
    setMovie_id(28);
  };
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=9bf8866aec070a01073c600a88bbefb5&with_genres=${encodeURIComponent(
      movie_id
    )} `;
    axios
      .get(apiUrl)
      .then((response) => {
        setMovieGenre(response.data.results);
        console.log("visar bild 3", movieGenre[1].backdrop_path);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie_id]);

  return (
    <div className="App">
      <button onClick={genreClick}> click</button>
      <div>
        {movieGenre.map((movies) => (
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
            alt="Movie poster"
          />
        ))}
      </div>
    </div>
  );
}
export default App;
