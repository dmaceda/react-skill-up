import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import swAlert from "@sweetalert/with-react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Resultados = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=a9f89e28a9c52e268490a138c8218858&language=es-ES&page=1&query=${keyword}`;
    axios
      .get(endPoint)
      .then((resp) => {
        const apiData = resp.data.results;
        if (apiData.length === 0) {
          swAlert(<h2>No hubo resultados</h2>);
          navigate("/listado");
        }
        setMovies(apiData);
      })
      .catch((error) => {
        swAlert(<h2>Hubo errores, intenta más tarde</h2>);
      });
  });
  console.log(movies);

  return (
    <>
      <h2>
        Buscaste: <em> {keyword}</em>
      </h2>
      {movies.length === 0 && <h3>No hay resultados</h3>}
      <div className="row">
        {movies?.map((movie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w500/" + movie.poster_path ||
                    "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title.slice(0, 17)}</h5>
                  <Link
                    to={`/detalle?movieID=${movie.id}`}
                    className="btn btn-primary"
                  >
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Resultados;
