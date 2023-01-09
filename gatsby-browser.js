import React from "react"
import App from "./src/components/app"

const wrapPageElement = ({ element, props }) => {
  function getInitialColorMode() {
    const colorPreference = window.localStorage.getItem("color-mode")

    if (colorPreference) {
      return colorPreference
    }

    const mql = window.matchMedia("(prefers-color-scheme: dark)")

    if (mql) {
      return mql.matches ? "dark" : "light"
    }

    return "light"
  }

  const colorMode = getInitialColorMode()

  const root = document.documentElement

  if (colorMode === "dark") {
    root.classList = "dark"
  }

  return <App {...props}>{element}</App>
}

export { wrapPageElement }
