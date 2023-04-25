import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { ThemeSlider } from "../styles/ThemeSlider";
import Logo from "../Logo";

const NavbarStyle = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  #main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  #main-header nav ul {
    display: flex;
    justify-content: space-around;
  }

  #main-header nav li {
    position: relative;
  }

  #main-header nav a {
    padding: 10px;
    margin: 0 5px;
    font-size: 1.06rem;
  }

  nav a::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -0.3rem;
    left: 10%;
    width: 0;
    height: 1px;
    margin-top: 0.8vw;
    background: ${({ theme }) => theme.colors.primaryText};
    transition: all .5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  nav a:hover::before {
  	width: 80%;
  }

  hover {
    border-bottom: none;
  }

  .side-wrapper-left,
  .side-wrapper-right {
    width: fit-content;
    display: flex;
  }

  .side-wrapper-left {
    padding-left: 6px;
    align-items: center;
  }

  .side-wrapper-left h1 {
    margin: 0 0 0.5rem 2rem;
    transition: color 0.3s ease-in;

  }

  .side-wrapper-right #theme-slider {
    margin-right: 26px;
  }

  .side-wrapper-right {
    flex-direction: row-reverse;
    padding-right: 1rem;
  }

  .side-wrapper-right nav {
    margin-right: 12rem;
  }

  #theme-slider {
    display: flex;
  }

  #main-header .menu-btn {
    display: none;
  }

  .menu-btn {
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .menu-btn span {
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primaryText};
  }

  #side-drawer {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 2000;
  }

  #side-drawer:target {
    display: block;
  }

  #side-drawer header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  #side-drawer ul {
    list-style: none;
    margin: 0;
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #side-drawer li {
    margin: 1rem 0;
  }

  #side-drawer a {
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 2rem;
  }

  #side-drawer #theme-slider {
    display: flex;
  }
  //Notebook 1024px
  @media (max-width: 64rem) {
    .side-wrapper-left h1 {
      font-size: 1.5rem;
    }

    .intro-container h1 {
    }
  }

  //Tablet 768px
  @media (max-width: 48rem) {
    #main-header nav {
      display: none;
    }

    #theme-slider {
      display: none;
    }

    #main-header .menu-btn {
      display: flex;
    }
  }

  @media (min-width: 48rem) {
    #side-drawer {
      display: none;
    }
  }

  //Smartphone 480px
  @media (max-width: 30rem) {
  }
`;

function Navbar() {
  const { setTheme } = useContext(ThemeContext);

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [checked, setTheme]);

  return (
    <NavbarStyle>
      <header id="main-header">
        <div className="side-wrapper-left">
          <Logo />
          <h1>
            <Link href="/.">solartools</Link>
          </h1>
        </div>

        <div className="side-wrapper-right">

          <ThemeSlider id="theme-slider">
            <label className="switch">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <span className="slider round"></span>
            </label>
          </ThemeSlider>
          <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/calculator">Calculator</Link>
            </li>
            <li>
              <Link href="/docs">Docs</Link>
            </li>
          </ul>
        </nav>
          <a href="#side-drawer" className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </header>
      <aside id="side-drawer">
        <header>
          <div className="flex">
            <Logo />
          </div>
          <a href="#" className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </header>
        <nav>
          <ul>
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/calculator#">Calculator</Link>
            </li>
            <li>
              <Link href="/docs#">Docs</Link>
            </li>
            <li>
              <ThemeSlider id="theme-slider#">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                  />
                  <span className="slider round"></span>
                </label>
              </ThemeSlider>
            </li>
          </ul>
        </nav>
      </aside>
    </NavbarStyle>
  );
}

export default Navbar;
