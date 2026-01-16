import type { ReactNode } from "react"
import type React from "react"

type Props ={
    readonly children: ReactNode,
    readonly title?:string,

}
export const Card: React.FC<Props> = ({children, title}) =>{
    return(
    <div className="card">
            {title && <h3>{title}</h3> }
            {children}
    </div>
    )
}