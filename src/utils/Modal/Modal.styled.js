import styled from '@emotion/styled';
import { ReactComponent as Close } from 'images/svg/x-close.svg';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1001;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  max-width: 95%;
  padding: 48px 18px 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ background, theme }) =>
    background || theme.colors.backgroundModalTodo};

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 768px) {
    width: 396px;
    height: 360px;
    padding: 40px 28px;
  }
`;

export const CloseModal = styled(Close)`
  position: absolute;
  top: 19px;
  right: 19px;
  width: 24px;
  height: 24px;
  transition: all 250ms;
  cursor: pointer;
  stroke: ${({ color, theme }) => color || theme.colors.textAndIconTodo};

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.colors.hovered};

    transform: rotate(180deg);
  }
`;
