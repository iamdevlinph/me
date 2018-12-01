import Link from 'next/link';
import styled from 'styled-components';

export default () => (
  <NavbarSection>
    <Link href="/">
      <NavbarImg src="/static/favicon.png" />
    </Link>
    <Link href="/about">
      <span>about</span>
    </Link>
    <Link href="/portfolio">
      <span>portfolio</span>
    </Link>
  </NavbarSection>
);

const NavbarSection = styled.div``;
const NavbarImg = styled.img`
  height: 100%;
  width: auto;
  cursor: pointer;
`;
