import styled from "styled-components";

const Player = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-width: 100vw;
  position: fixed;
  bottom: 0px;
  left: 0px;
  min-height: 70px;
  background-color: #262626;
  z-index: 99;
`;

export const PlayerMenu = ({ ...props }) => <Player>{props.children}</Player>;
