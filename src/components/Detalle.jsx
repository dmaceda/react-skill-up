import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react";
import axios from "axios";

const Detalle = () => {
  let token = sessionStorage.getItem("token");

  const navigate = useNavigate();

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movieDetail, setMovieDetail] = useState(null);
  const [credits, setCredits] = useState(null);

  //Detalle general de la pelicula
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=a9f89e28a9c52e268490a138c8218858&language=es-ES`;
    axios
      .get(endPoint)
      .then((resp) => {
        const apiData = resp.data;
        setMovieDetail(apiData);
      })
      .catch((error) => {
        swAlert(<h2>Hubo errores, intenta más tarde</h2>);
      });
  }, []);

  //Creditos de la pelicula
  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=a9f89e28a9c52e268490a138c8218858&language=es-ES`;
    axios
      .get(endPoint)
      .then((resp) => {
        const apiData = resp.data.cast;
        setCredits(apiData);
      })
      .catch((error) => {
        swAlert(<h2>Hubo errores, intenta más tarde</h2>);
      });
  }, []);

  return (
    <>
      {!token && navigate("/")}
      {!movieDetail && <h2>spinner</h2>}

      {movieDetail && (
        <>
          <h2>{movieDetail.title}</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={
                  "https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path
                }
                className="img-fluid"
                alt="poster"
              />
            </div>
            <div className="col-8">
              <h5>{movieDetail.release_date}</h5>
              <h5>
                <p>{movieDetail.overview}</p>
              </h5>
              <h5>Rating: {movieDetail.vote_average}</h5>
              <h5>Generos:</h5>
              <ul>
                {movieDetail.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <h5>Reparto:</h5>
              <ul>
                {credits?.slice(0, 5).map((actor) => (
                  <li key={actor.id}>{actor.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detalle;
