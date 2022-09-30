import { Header, MainLogo, Links, Navigation } from './AppBar.styled';
import { authSelectors } from 'redux/authSelector';
import { useSelector } from 'react-redux';
import { LogOut } from 'components/LogOut/LogOut';
import { useMediaQuery } from 'hooks/useMediaQoery';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const AppBar = () => {
  let isPageWide = useMediaQuery('(min-width: 769px)');

  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <>
      <Header>
        <MainLogo />
        <Navigation>
          {isPageWide ? (
            isLoggedIn ? (
              <>
                <BurgerMenu />
                <LogOut />
              </>
            ) : (
              <>
                <Links to="/"> Home </Links>
                <Links to="/login">Login </Links>
                <Links to="/register"> Register</Links>
              </>
            )
          ) : (
            <>
              <BurgerMenu />
            </>
          )}
        </Navigation>
      </Header>
    </>
  );
};
