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
            <div className="col-3">
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                </div>
                </div>
            </div>

            
        </div>
  )
}

export default Listado