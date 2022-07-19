import React from "react";
import styled from "styled-components";
import { AvatarProps } from "../../types/avatar";

const AvatarWrapper = styled.div`
  width: 150px;
  height: 150px;
`;

const AvatarImg = styled.img`
  border-radius: 100%;
  object-fit: cover;
`;

export const Avatar = ({ avatarSrc, ...props }: AvatarProps) => (
  <AvatarWrapper {...props}>
    <AvatarImg src={avatarSrc} />
  </AvatarWrapper>
);
