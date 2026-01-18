import { Card } from "@core/components/card/card"
import type React from "react"
import { Link } from "react-router"

export const HomePage: React.FC = () => {
    return(
        <Card>
            <Link to="/login" className="btn btn-primary">Inicie sesión</Link>
            <Link to="/register" className="btn btn-outline-secondary">Crear un usuario</Link>
        </Card>
    )
}

export default HomePage