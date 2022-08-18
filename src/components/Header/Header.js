import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Icon from '../Icon';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <ShoppingBag id="shopping-bag" strokeWidth={1} size={16} />
          <SearchIcon id="search" strokeWidth={1} size={16} />
          <Menu id="menu" strokeWidth={1} size={16} />
        </MobileNav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  padding: 21px 32px;
`;

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;


  @media (max-width: 768px) {
    display: none;
}`;

const MobileNav = styled.nav`
border: 3px solid red;
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    display: none;
}`;

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 30px;
  bottom: 0;
  width: 16px;
  height: 16px;
`;

const ShoppingBag = styled(Icon)`
  position: absolute;
  top: 0;
  left: 20px;
  bottom: 0;
  width: 16px;
  height: 16px;
`;

const Menu = styled(Icon)`
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  width: 16px;
  height: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
