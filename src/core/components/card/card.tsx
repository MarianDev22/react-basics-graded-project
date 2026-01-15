import type { ReactNode } from "react"
import type React from "react"

type Props ={
    readonly children: ReactNode,

}
export const Card: React.FC<Props> = ({children}) =>{
    return(
    <div className="card">
            {children}
    </div>
    )
}