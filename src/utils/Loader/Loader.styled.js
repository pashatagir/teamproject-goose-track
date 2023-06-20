import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.loaderWrapper};
    opacity: 0.4;

`;