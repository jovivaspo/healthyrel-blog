/*MODULES*/
import React from "react"

/*COMPONENTS*/
import { Link } from "gatsby"
import BottomThemeToggle from "./bottom-theme-toggle"
import ArrowMenu from "./icons/arrow"
/*CSS*/
import "../assets/css/menu.css"
import Submenu from "./sub-menu"
import { useSubMenu } from "../hooks/useSubMenu"
import { usePosition } from "../hooks/usePosition"

const munuItems = ["about", "contact"]

const Menu = React.forwardRef((props, ref) => {
  const { isActive, theme, handlerTheme, categories } = props
  const { handlerActiveSubMenu, isActiveSubMenu } = useSubMenu()
  const arrowRef = React.useRef()

  const position = usePosition(arrowRef)

  React.useEffect(() => {
    isActive
      ? ref.current.classList.add("active")
      : ref.current.classList.remove("active")
  }, [isActive])

  React.useEffect(() => {
    const desactivateSubMenu = () => {
      handlerActiveSubMenu()
    }

    if (isActiveSubMenu) {
      document.addEventListener("scroll", desactivateSubMenu)
      return () => document.removeEventListener("scroll", desactivateSubMenu)
    }
  }, [isActiveSubMenu])

  return (
    <nav className="menu-container" ref={ref}>
      <ul>
        <li>
          <Link
            className="menu-link"
            activeClassName="menu-link-underline"
            to="/"
          >
            HOME
          </Link>
        </li>
        <li>
          <div className="container-button-submenu">
            <Link
              className="menu-link"
              activeClassName="menu-link-underline"
              to="/posts"
            >
              POSTS
            </Link>
            <ArrowMenu
              isActiveSubMenu={isActiveSubMenu}
              handlerActiveSubMenu={handlerActiveSubMenu}
              ref={arrowRef}
            />
          </div>
        </li>
        {munuItems.map((el, index) => {
          return (
            <li key={index}>
              <Link
                className="menu-link"
                activeClassName="menu-link-underline"
                to={el === "home" ? "/" : `/${el}`}
              >
                {el}
              </Link>
            </li>
          )
        })}
        <li>
          <BottomThemeToggle theme={theme} handlerTheme={handlerTheme} />
        </li>
      </ul>
      <Submenu
        categories={categories}
        position={position}
        isActiveSubMenu={isActiveSubMenu}
        handlerActiveSubMenu={handlerActiveSubMenu}
      />
    </nav>
  )
})

export default Menu
