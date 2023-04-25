import styled from "styled-components";
import Link from "next/link";
import Logo from "../Logo";

const FooterStyle = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footerText};
  padding-top: 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.lightBorder};
  width: 100%;
  height: 400px;
  z-index: 1000;
  bottom: 0;

  .links-and-language-sector {
    display: flex;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    margin-left: auto;
    justify-content: space-between;
  }

  .links-selector {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 2.4rem;
    width: 53rem;
    margin-right: 15rem;
  }

  .links-selector ul {
    flex-basis: 25.6rem;
    line-height: 30px;
    width: 9rem;
  }

  .links-selector ul li a {
    color: ${({ theme }) => theme.colors.footerText};

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  .language-selector {
    color: ${({ theme }) => theme.colors.footerText};
    background-color: transparent;
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.footerText};
    padding: 9px 21px;
    align-self: right;

    :hover {
      background-color: #1a1a1a;
    }
  }

  .logo-and-copyright {
    padding: 64px 9rem 32px 0;
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-and-copyright h1 a{
    margin-left: 9px;
    color: ${({ theme }) => theme.colors.footerText};

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }

  //Notebook 1024px
  @media (max-width: 64rem) {
    .links-selector {
      margin-right: 9rem;
    }
  }

  //Tablet 768px
  @media (max-width: 48rem) {
    .links-selector {
      margin-right: 0rem;
      flex-direction: column;
      flex- ul {
        height: 1rem;
      }
    }

    .links-selector ul {
      flex-basis: 9rem;
      height: 1rem;
    }
  }

  //Smartphone 480px
  @media (max-width: 30rem) {
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className="links-and-language-sector">
        <div className="links-selector">
          <ul>
            <li>
              <Link href="/docs">Docs</Link>
            </li>
            <li><Link href="/contact/aboutUs">About Us</Link></li>
            <li>
              <Link href="/contact/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link href="/contact/imprintContact">Imprint Contact</Link>
            </li>
          </ul>
          <ul>
            <li>Help and Support</li>
            <li>Investor</li>
            <li>Roadmap</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="language-selector-container">
          <button className="language-selector">English</button>
        </div>
      </div>
      <div className="logo-and-copyright">
        <h1><Link href="/">solartools</Link></h1>
        <Logo color="white-logo" />
      </div>
    </FooterStyle>
  );
}

export default Footer;
