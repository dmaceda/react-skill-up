import { Routes ,Route } from 'react-router-dom';
import Login from "./components/Login";
import Listado from "./components/Listado";


function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route exact path="/listado" element={<Listado/>}/>
    </Routes>
    
  );
}

export default App;
