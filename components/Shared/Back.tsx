import React from "react";
import styled from "styled-components";

import { useRouter } from "next/router";
import { ButtonProps } from "../../types/button";

const Default = styled.button<any>`
  font-family: inherit;
  background-color: transparent;
  color: rgb(155, 155, 155);
  padding: 15px;
  border: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  position: absolute;
  left: var(--aside-width);
  top: 0;

  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export const BackButton = ({ action, ...props }: ButtonProps) => {
  const router = useRouter();

  const isDashboard = router.pathname.includes("dashboard/");

  if (!isDashboard) {
    return null;
  }
  return (
    <Default onClick={action} {...props}>
      {props.children}
    </Default>
  );
};
