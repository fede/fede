import * as React from "react"
import { css } from "../../styled-system/css"

type TitleProps = {
    children: React.ReactNode
    color?: string
}

export const TitleH1 = ({ children, color }: TitleProps) => {
    return <h1 className={css({ fontSize: '6xl', sm: { fontSize: "9xl" } , fontWeight: "bold", color })}>{children}</h1>
}

export const TitleH2 = ({ children, color }: TitleProps) => {
    return <h2 className={css({ fontSize: '3xl', sm: { fontSize: "5xl" } , fontWeight: "bold", textTransform: "uppercase", color })}>{children}</h2>
}

export const TitleH3 = ({ children, color }: TitleProps) => {
    return <h3 className={css({ fontSize: "xl", sm: { fontSize: "2xl" }, fontWeight: "bold", textTransform: "uppercase", color })}>{children}</h3>
}