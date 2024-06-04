import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { useState, useEffect } from "react";

export const Comidas = () => {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((result) => {
        setCategorias(result.categories);
      });
  }, []); 

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {categorias.map((categoria, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={categoria.strCategory} src={categoria.strCategoryThumb} />
            </ListItemAvatar>
            <ListItemText
              primary={categoria.strCategory}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}
