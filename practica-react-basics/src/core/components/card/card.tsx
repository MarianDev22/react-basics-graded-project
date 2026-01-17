import type { ReactNode } from "react"
import type React from "react"

type Props ={
    readonly children: ReactNode,
    readonly title?:string,
    readonly className?: string
}
export const Card: React.FC<Props> = ({children, title, className}) =>{
    return(
    <div className={`card ${className}`}>
            {title && <h3>{title}</h3> }
            {children}
    </div>
    )
}