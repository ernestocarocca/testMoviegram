import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [movie3, setMovie3] = useState([]);

  const FetchMovies = () => {
    fetch(
      " https://api.themoviedb.org/3/movie/popular?api_key=9bf8866aec070a01073c600a88bbefb5&language=en-US&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie(data.results);
        console.log("visar bild 1a", movie);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/123?api_key=9bf8866aec070a01073c600a88bbefb5&append_to_response=videos,images"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie2(data.images.backdrops);
        console.log("visar bild 12", movie2);
      });
    const movieName = "star+wars";
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=9bf8866aec070a01073c600a88bbefb5&query=${encodeURIComponent(
      movieName
    )}`;

    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie3(data.results);
        console.log("visar bild 3", movie3);
      });

    // https://api.themoviedb.org/3/search/movie?api_key=9bf8866aec070a01073c600a88bbefb5&query=Jack+Reacher
  };
  useEffect(() => {
    FetchMovies();
  }, []);

  return (
    <div className="App">
      <div>
        <input type="text" />
      </div>
      {movie3.map((movies) => (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt="Movie poster"
          />
        </div>
      ))}
      <div>
        {movie2.map((movies2) => {
          return (
            <img
              src={`https://image.tmdb.org/t/p/w500${movies2.file_path}`}
              alt="Movie poster"
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
