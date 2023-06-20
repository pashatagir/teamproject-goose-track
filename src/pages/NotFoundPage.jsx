import animation from 'images/others/404-page-animation.gif';
import { Btn, Img, Title, Wrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Img src={animation} alt="" />
      <Title>Oops! Page not found</Title>
      <Btn to="/">Go back to homepage</Btn>
    </Wrapper>
  );
};

export default NotFoundPage;
