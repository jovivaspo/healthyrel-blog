/*MODULES*/
import React from "react";

/*COMPONENTS*/
import LogoLight from "../assets/images/Logo-light.png";
import LogoDark from "../assets/images/Logo-dark.png";

/*CSS*/
import "../assets/css/logo.css";
import { Link } from "gatsby";

const Logo = ({ theme }) => {
  const [logo, setLogo] = React.useState(LogoDark);

  React.useEffect(() => {
    theme === "light" ? setLogo(LogoDark) : setLogo(LogoLight);
  }, [theme]);

  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </div>
  );
};

export default Logo;
