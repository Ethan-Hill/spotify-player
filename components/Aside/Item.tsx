import styled from "styled-components";
import Link from "next/link";
import { MenuItemProps } from "../../types/menuItem";

const MenuIcon = styled.div`
  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
    margin-inline: auto;
    fill: currentcolor;
  }
`;

const NavMenu = styled.a`
  display: block;
  padding: 15px 0px;
  border-left: 5px solid transparent;
  width: 100%;
  height: 100%;
  color: rgb(155, 155, 155);
  font-size: 11px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  cursor: pointer;
  width: 100px;
  font-family: inherit;
  text-align: center;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    color: rgb(255, 255, 255);
    background-color: rgb(24, 24, 24);
    border-left: 5px solid rgb(30, 215, 96);
  }
`;

export const MenuItem = ({ label = "Hello", ...props }) => (
  <Link href={props.href} passHref>
    <NavMenu {...props}>
      <MenuIcon>{props.children}</MenuIcon>
      <div>{label}</div>
    </NavMenu>
  </Link>
);
