import React from "react";
import styled from "styled-components";
import { ButtonProps } from "../../types/button";
import { LinkProps } from "../../types/link";

const Default = styled.a<any>`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.3, 0, 0.4, 1) 0s;

  &:hover {
    color: rgb(30, 215, 96);
  }
`;

export const Link = ({ label, target, altText, url, ...props }: LinkProps) => (
  <Default alt={altText} target={target} href={url} {...props}>
    {label}
  </Default>
);
