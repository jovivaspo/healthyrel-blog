/*MODULES*/
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

/*COMPONENTS*/
import Logo from "./logo";
import Menu from "./menu";
import MenuIcon from "./menu-icon";

/*CSS*/
import "../assets/css/navbar.css";
import { useMenu } from "../hooks/useMenu";

const Navbar = ({ theme, handlerTheme }) => {
  const { isActive, handlerActive } = useMenu();

  const menuRef = React.useRef(null);
  const iconRef = React.useRef(null);

  const data = useStaticQuery(graphql`
    query getCategories {
      allStrapiCategory {
        nodes {
          name
        }
      }
    }
  `);

  const categories = data.allStrapiCategory.nodes.map(
    (category) => category.name
  );

  React.useEffect(() => {
    const handlerMenu = (e) => {
      if (
        isActive &&
        !iconRef.current.contains(e.target) &&
        !e.target.matches(".btn-theme") &&
        !e.target.matches(".btn-theme > *") &&
        !e.target.matches("a")
      ) {
        handlerActive();
      }
    };

    document.addEventListener("mousedown", handlerMenu);

    return () => {
      document.removeEventListener("mousedown", handlerMenu);
    };
  }, [isActive]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Logo theme={theme} />
        <Menu
          isActive={isActive}
          ref={menuRef}
          theme={theme}
          handlerTheme={handlerTheme}
          categories={categories}
        />
        <MenuIcon
          ref={iconRef}
          color={theme === "dark" ? "#ddd" : "#222"}
          handlerActive={handlerActive}
          isActive={isActive}
        />
      </div>
    </nav>
  );
};

export default Navbar;
