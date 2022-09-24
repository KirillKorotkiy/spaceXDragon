import { Header, MainLogo, Links, Navigation } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <Header>
        <MainLogo />
        <Navigation>
          <Links to="/"> Home </Links>
          <Links to="/login">Login </Links>
          <Links to="/register"> Register</Links>
        </Navigation>
      </Header>
    </>
  );
};
