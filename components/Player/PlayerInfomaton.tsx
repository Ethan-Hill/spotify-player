import { ImgHTMLAttributes, ReactPropTypes } from "react";
import styled from "styled-components";

const PlayerInfomation = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 10px;
`;

interface PlayerInfoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  props?: ReactPropTypes;
}

export const PlayerInfo = ({ src, ...props }: PlayerInfoProps) => (
  <PlayerInfomation src={src} {...props} />
);
