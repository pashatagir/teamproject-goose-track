import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 20px;

  @media ${device.tablet} {
    padding: 24px 32px;
  }

  @media ${device.desktop} {
    padding: 40px 32px 16px 32px;
  }
`;

export const HeaderTitleWrap = styled.div`
  @media ${device.desktop} {
    margin-right: auto;
  }
`;

export const HeaderTitle = styled.h2`
  display: none;

  @media ${device.desktop} {
    margin-right: auto;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.b};
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    line-height: 1;
    color: ${({ theme }) => theme.colors.textAndIconTodo};
  }
`;

export const BusyText = styled.p`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.29;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const BusySpan = styled.span`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;

export const MenuBtn = styled.button`
  display: block;
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.loaderWrapper};
  margin-right: auto;
  cursor: pointer;

  @media ${device.tablet} {
    width: 34px;
    height: 34px;
  }

  @media ${device.desktop} {
    display: none;
  }

  :hover {
    stroke: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const BtnAddFeedback = styled.button`
  margin-left: auto;
  padding: 0;
  border-radius: 10px;
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 97px;
  height: 32px;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    border-radius: 14px;
    font-size: 14px;
    line-height: calc(18 / 14);
    width: 130px;
    height: 42px;
    margin-right: 24px;
  }

  @media screen and (min-width: 1440px) {
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }

  &:active {
    filter: blur(0.1rem);
  }
`;

export const GooseImg = styled.picture`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
    width: 64px;
    height: 60px;
    margin-right: 8px;
  }
`;
