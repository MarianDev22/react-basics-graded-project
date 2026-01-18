import type React from "react"
import { Link } from "react-router"

export const HomePage: React.FC = () => {
    return(
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="text-center p-5 bg-white shadow rounded">
                <h1 className="display-4 fw-bold mb-4">Bienvenidos a MyResto</h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                    <Link to="/login" className="btn btn-primary">Inicie sesión</Link>
                    <Link to="/register" className="btn btn-outline-secondary">Crear un usuario</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage