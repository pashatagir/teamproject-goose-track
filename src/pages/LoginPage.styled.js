import styled from "@emotion/styled";
import { device } from '../styles/mediaVeriables';
export const Img = styled.img`
  display: none;

  @media ${device.desktop}{
    display: block;
    width: 368px;
    height: 521px;
    position: absolute;
    right: 60px;
    bottom: 19px;
  }
`;
