import { useParams } from 'react-router-dom';

export const DetalleUsuario = () => {
    let { usuario, password } = useParams();
    return (
        <h2>Mi usuario es {usuario} y mi Contraseña es {password}</h2>
    )
}
