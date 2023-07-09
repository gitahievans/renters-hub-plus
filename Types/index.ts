import { StaticImageData } from "next/image"
import { MouseEventHandler } from "react"

export type CustomButtonProps = {
    text: string,
    styles?: string,
    btnType: 'button' | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export type SortButtonType = {
    width?: string,
    gap?: string, 
    hidden: boolean | null,
    mdTextSize?: string,
    lgTextSize?: string, //
    btnBg?: string,
    hoverBg?: string
}