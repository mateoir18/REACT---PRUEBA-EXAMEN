import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import CardMedia from '@mui/material/CardMedia';

export const Inicio = () => {
  const [categorias, setCategorias] = useState("")

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((result) => {
        setCategorias(result.categories[0].strCategoryThumb);  
      });
  });

  return (
    <>
    
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={categorias}
        title="green iguana"
        />
        
      </Card>
    </>
  )
}
