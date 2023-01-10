import React from "react"
import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: null,
  handlerTheme: null,
})

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(undefined)
  const root = window.document.documentElement

  useEffect(() => {
    const initialColor = root.classList
    initialColor.value === "dark" ? setTheme("dark") : setTheme("light")
  }, [])

  const handlerTheme = () => {
    if (theme === "dark") {
      setTheme("light")
      root.classList.remove("dark")
      window.localStorage.setItem("color-mode", "light")
    } else {
      setTheme("dark")
      root.classList.add("dark")
      window.localStorage.setItem("color-mode", "dark")
    }
  }

  const data = { theme, handlerTheme }

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
