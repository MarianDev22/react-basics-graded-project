import { Card } from "@core/components/card/card"
import type React from "react"
import { Link } from "react-router"

export const HomePage: React.FC = () => {
    return(
        <Card>
            <Link to="/login" className="btn btn-primary">Entrar</Link>
            <Link to="/register" className="btn btn-outline-secondary">Crear cuenta</Link>
        </Card>
    )
}

export default HomePage