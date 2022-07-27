import React, { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types/button";

const Drawer = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100px;
  background-color: rgb(4, 3, 6);
  text-align: center;
  z-index: 99;
`;

export const AsideNav = ({ ...props }) => (
  <Drawer {...props}>{props.children}</Drawer>
);
