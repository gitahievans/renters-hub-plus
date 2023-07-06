import { StaticImageData } from "next/image"
import { MouseEventHandler } from "react"

export type CustomButtonProps = {
    text: string,
    styles?: string,
    btnType: 'button' | "submit",
    handleClick?: MouseEventHandler<HTMLButtonElement>
}