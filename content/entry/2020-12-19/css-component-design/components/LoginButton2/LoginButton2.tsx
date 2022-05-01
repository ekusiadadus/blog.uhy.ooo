import React from "react"
import { button } from "./LoginButton2.module.css"

type Props = {
  className?: string
}

export const LoginButton2: React.VFC<Props> = ({ className }) => (
  <button className={button + (className ? ` ${className}` : "")}>
    ログイン
  </button>
)
