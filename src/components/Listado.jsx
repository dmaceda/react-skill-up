import React, { useEffect, useState }from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const Listado = () => {
    const API = 'a9f89e28a9c52e268490a138c8218858'

    const navigate = useNavigate();
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
           
        if (token === null ) {
            navigate('/')
        }
    }, []);

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=a9f89e28a9c52e268490a138c8218858&language=en-ES&page=1'
        axios.get(endPoint)
            .then(resp => {
                const apiData = resp.data.results
                setMoviesList(apiData)
            })
    }, [setMoviesList]);

    console.log(moviesList)
   
  return (
        <div className="row">
            {
                moviesList?.map((movie, idx) => {
                    return (
                    <div className="col-3" key={idx}>
                    <div className="card" >
                        <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title.slice(0, 17)}</h5>
                            <p className="card-text">{movie.overview.slice(0, 100)}...</p>
                            <Link to="/" className="btn btn-primary">Ver mas</Link>
                        </div>
                        </div>
                    </div>
                    )
                })
            }

            
        </div>
  )
}

export default Listado