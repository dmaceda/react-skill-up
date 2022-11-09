import React from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (keyword < 4) {
      swAlert(<h2>Ingrese el nombre de la pelicula</h2>);
    } else {
      e.target.keyword.value = "";
      navigate(`/resultados?keyword=${keyword}`);
    }
  };

  return (
    <form className="d-flex align-items-center" onSubmit={handleSubmit}>
      <label className="form-label mb-0 mx-2">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="Buscar pelicula..."
        />
      </label>
      <button className="btn btn-success" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
