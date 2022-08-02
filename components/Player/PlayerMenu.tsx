import styled from "styled-components";

const Player = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: calc((100vw - (100vw - 100%)) - var(--aside-width));
  max-width: 100%;
  position: fixed;
  bottom: 0px;
  right: 0px;
  min-height: var(--player-menu-height);
  background-color: #262626;
  z-index: 99;
`;

export const PlayerMenu = ({ ...props }) => <Player>{props.children}</Player>;
