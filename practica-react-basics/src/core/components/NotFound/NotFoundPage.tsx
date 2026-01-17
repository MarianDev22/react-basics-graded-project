import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div className="container text-center vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3"> <span className="text-danger">¡Vaya!</span> Página no encontrada.</p>
      <p className="lead">
        El plato que buscas no existe o ha sido borrado.
      </p>
      <Link to="/products" className="btn btn-primary">Volver al Inicio</Link>
    </div>
  );
};
export default NotFoundPage