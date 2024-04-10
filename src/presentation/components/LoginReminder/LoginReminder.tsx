import * as Styled from "./styled";
import img from "/pleaseLogin.png";

const LoginReminder = () => {
  return (
    <Styled.Container>
      <Styled.Image src={img} alt="Nice Image" />
      <Styled.Text>Please log in to use the application</Styled.Text>
    </Styled.Container>
  );
};

export default LoginReminder;
