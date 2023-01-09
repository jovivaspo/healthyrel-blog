/*MODULES*/
import React from "react";
import { useResize } from "../hooks/useResize";
import { ThemeContext } from "../context/theme-context";
/*COMPONENTS*/
import { Pattern } from "./pattern";
import { ImageHome } from "./image-home";

const HeaderHome = ({ title }) => {
  const width = useResize();
  const { theme } = React.useContext(ThemeContext);

  return (
    <header className="home-header">
      <Pattern width={width} theme={theme} />
      <div className="home-header-content">
        <section className="home-description">
          <h1 className="home-title">Welcome to {title} !</h1>
          <h2 className="home-subtitle">
            {" "}
            On our website, you will find tips and advice on mental health and
            social relationships.
          </h2>
        </section>

        <ImageHome width={300} height={500} />
      </div>
    </header>
  );
};

export default HeaderHome;
