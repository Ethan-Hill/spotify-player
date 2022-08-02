import { ImgHTMLAttributes, ReactPropTypes } from "react";
import styled from "styled-components";

const PlayerInfomation = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 10px;
`;

interface PlayerInfoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  props?: ReactPropTypes;
}

export const PlayerInfo = ({ src, ...props }: PlayerInfoProps) => (
  <PlayerInfomation src={src} {...props} />
);
