import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  margin: 0 auto;
  height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.l};
`;

export const Img = styled.img`
  display: block;
  width: 50%;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  padding: 0 20px;

  font-family: Inter;
  font-weight: ${({ theme }) => theme.fontWeight.b};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  line-height: 100%;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl}px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fontSizes.titleMain}px;
  }
`;

export const Btn = styled(Link)`
  padding: 16px 23px;

  font-family: Inter;
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.accent};
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  transition: background-color ${({ theme }) => theme.animations.duration};
  ${({ theme }) => theme.animations.cubicBezier};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
`;
