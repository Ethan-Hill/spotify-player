import styled from "styled-components";

const PlayerAction = styled.button`
  display: block;
  width: 42px;
  height: 42px;
  color: white;
  transition: all 0.15s cubic-bezier(0.3, 0, 0.4, 1) 0s;
  cursor: pointer;
  font-family: inherit;
  text-align: center;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:active {
    transform: scale(0.9);
  }
`;

const PlayerActionIcon = styled.div`
  width: 100%;
  height: 100%;

  svg {
    width: 42px;
    height: 42px;
    margin-inline: auto;
    fill: white;
  }
`;

export const PlayerItem = ({ action, ...props }: any) => (
  <PlayerAction onClick={action}>
    <PlayerActionIcon>{props.children}</PlayerActionIcon>
  </PlayerAction>
);
