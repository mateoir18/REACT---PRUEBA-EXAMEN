import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BasicMenu from './BasicMenu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const Cabecera=()=> {
  const navigate = useNavigate()

  const handleInicio=()=>{
    navigate("/");
  }
  const handleLogin=()=>{
    navigate("/login");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar src="https://robohash.org/dss"></Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={handleInicio}>Inicio</Button>
          </Typography>
          <BasicMenu/>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogin}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
