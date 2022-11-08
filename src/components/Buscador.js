import React from "react";
import swAlert from "@sweetalert/with-react";

const Buscador = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    if (keyword.length === 0) {
      swAlert(<h2>Ingrese el nombre de la pelicula</h2>);
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
