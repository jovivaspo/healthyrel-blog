/*MODULES*/
import React from "react"
import { useSubMenu } from "../hooks/useSubMenu"
/*COMPONENTS*/
import { Link } from "gatsby"

/*CSS*/
import "../assets/css/menu.css"

const Submenu = ({
  categories,
  position,
  height,
  isActiveSubMenu,
  handlerActiveSubMenu,
}) => {
  const subMenuRef = React.useRef()

  React.useEffect(() => {
    isActiveSubMenu
      ? subMenuRef.current.classList.add("submenu-active")
      : subMenuRef.current.classList.remove("submenu-active")
  }, [isActiveSubMenu, subMenuRef.current])

  React.useEffect(() => {
    const handlerSubMenu = e => {
      if (
        isActiveSubMenu &&
        !subMenuRef.current.contains(e.target) &&
        !e.target.matches(".arrow") &&
        !e.target.matches(".arrow > *")
      ) {
        handlerActiveSubMenu()
      }
    }

    document.addEventListener("mousedown", handlerSubMenu)

    return () => {
      document.removeEventListener("mousedown", handlerSubMenu)
    }
  }, [isActiveSubMenu, subMenuRef.current])

  return (
    <div
      className="submenu"
      ref={subMenuRef}
      style={{ left: position.x - position.width, top: height }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="12"
        fill="none"
        viewBox="0 0 32 12"
        class="init"
      >
        <path
          d="
        M 0 12
        C 8 12
          9.6 0
          16 0
        C 22.4 0
          24 12
          32 12
        Z
        "
        ></path>
      </svg>
      {categories.map((el, index) => {
        return (
          <Link key={index} to={`/${el}`}>
            {el}
          </Link>
        )
      })}
    </div>
  )
}

export default Submenu
