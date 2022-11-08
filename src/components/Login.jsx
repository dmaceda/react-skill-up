import React from "react";
import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (password === "" || email === "") {
      swAlert(<h2>Ingrese su email y password</h2>);
      return;
    }
    if ((email !== "") & !regexEmail.test(email)) {
      swAlert(<h2>Ingrese un email válido</h2>);
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      return;
    }
    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swAlert(<h2>Perfecto, te logueaste correctamente</h2>);
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        navigate("/listado");
      });
  };

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && navigate("/listado")}

      <div className="row">
        <div>
          <h2>Formulario de Login</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label d-block mt-2">
              <span>Correo electrónico</span>
              <br />
              <input className="form-control" type="text" name="email" />
            </label>
            <br />
            <label className="form-label d-block mt-2">
              <span>Contraseña</span>
              <br />
              <input className="form-control" type="password" name="password" />
            </label>
            <br />
            <button className="btn btn-success mt-2" type="submit">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
