import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const[usuario, setUsuario]=useState("");
  const[password, setPassword]=useState("");
  const navigate = useNavigate()

  const HandleGuardar = () => {
    navigate(`/detalle/${usuario}/${password}`);
}


  return (
    <>
        <Box>
          <div>
          <TextField
          required
          id="outlined-required"
          label="Usuario"
          defaultValue="UserName"
          onChange={(e)=>setUsuario(e.target.value)}
        />
    <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />
          </div>
        </Box>
        <Button variant="contained" onClick={HandleGuardar}>Guardar</Button>
    </>
  )
}
