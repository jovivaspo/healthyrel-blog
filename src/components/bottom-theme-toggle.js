/*MODULES*/
import React from "react"

/*COMPONENTS*/
import Sun from "./icons/sun"
import Moon from "./icons/moon"
/*CSS*/
import "../assets/css/bottom-theme-toggle.css"

const BottomThemeToggle = ({ theme, handlerTheme }) => {
  return (
    <div className="container-bottom">
      <bottom className="btn-theme" onClick={handlerTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </bottom>
    </div>
  )
}

export default BottomThemeToggle
