import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from "./componentes/Inicio";
import { Login } from "./componentes/Login";
import { Comidas } from "./componentes/Comidas";
import { DetalleUsuario } from "./componentes/DetalleUsuario";
import {Cabecera} from "./componentes/Cabecera";

function App() {
 

  return (
    <>
     <BrowserRouter>
     <Cabecera></Cabecera>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/comidas" element={<Comidas/>}></Route>
          <Route path="/detalle/:usuario/:password" element={<DetalleUsuario/>}></Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
