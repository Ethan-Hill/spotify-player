import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types/button";

const Default = styled.button<any>`
  font-family: inherit;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 30px;
  padding: ${(props) => (props.seeMore ? "11px 24px" : " 12px 30px;")};

  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(24, 24, 24);
  }
`;

const Action = styled(Default)`
  background-color: rgb(29, 185, 84);
  border: 0;
  padding: 17px 35px;
  min-width: 160px;
  letter-spacing: 2px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;

  &:hover,
  &:focus {
    background-color: rgb(30, 215, 96);
    color: rgb(255, 255, 255);
  }
`;

export const Button = ({ label = "Hello", action, ...props }: ButtonProps) => (
  <Default onClick={action} {...props}>
    {label}
  </Default>
);

export const ActionButton = ({
  label = "Hello",
  action,
  ...props
}: ButtonProps) => (
  <Action onClick={action} {...props}>
    {label}
  </Action>
);
