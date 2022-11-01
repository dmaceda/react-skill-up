import React, { useEffect }from 'react';
import { useNavigate } from 'react-router-dom';




const Listado = () => {
    const movieS = [1, 2, 3]

   

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
           
        if (token === null ) {
            navigate('/')
        }
    }, [])
   
  return (
    <div>
        {

            movieS.map((movie, id) => {
                (
                    <div key={id}>
                        <h5>{movie.title}</h5>
                    </div>
                )
            })
        }
        <div>Listado</div>
    </div>
  )
}

export default Listado