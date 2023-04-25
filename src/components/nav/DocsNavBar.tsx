import Link from "next/link";
import styled from "styled-components";

const DocsNavBarStyle = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  border-right: 1px solid ${({ theme }) => theme.colors.lightBorder};

  ul {
    margin: 2rem 0 0 2rem;
    line-height: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryText};

    :hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

function DocsNavBar() {
  return (
    <DocsNavBarStyle>
        <nav>
          <ul>
            <li>
              <Link href="/docs/">Intro</Link>
            </li>
            <li>
              <Link href="/docs/guide">Guide</Link>
            </li>
            <li>
              <Link href="/docs/calculations">Calculations</Link>
            </li>
          </ul>
        </nav>
    </DocsNavBarStyle>
  );
}

export default DocsNavBar;
