import styled from '@emotion/styled';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-block: 64px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-block: 64px 100px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    padding-block: 64px 118px;
  }
`;
