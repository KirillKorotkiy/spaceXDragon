import { Header, MainLogo, Links, Navigation } from './AppBar.styled';
import { authSelectors } from 'redux/authSelector';
import { useSelector } from 'react-redux';
import { LogOut } from 'components/LogOut/LogOut';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <>
      <Header>
        <MainLogo />
        <Navigation>
          <Links to="/"> Home </Links>
          {!isLoggedIn ? (
            <>
              <Links to="/login">Login </Links>
              <Links to="/register"> Register</Links>
            </>
          ): <LogOut/> }
        </Navigation>
      </Header>
    </>
  );
};
