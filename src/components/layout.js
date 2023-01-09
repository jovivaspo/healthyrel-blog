/*MODULES*/
import React, { useContext } from "react"
import { ThemeContext } from "../context/theme-context"

/*COMPONENTS*/
import Navbar from "./navbar"
import Footer from "./footer"

/*CSS*/
import "../assets/css/layout.css"

const Layout = ({ children }) => {
  const { theme, handlerTheme } = useContext(ThemeContext)

  return (
    <div className="layout">
      <Navbar theme={theme} handlerTheme={handlerTheme} />
      {children}
      <Footer theme={theme} />
    </div>
  )
}

export default Layout
