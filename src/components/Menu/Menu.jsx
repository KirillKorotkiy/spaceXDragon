import { StyledMenu } from './Menu.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelector';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <StyledMenu open={open}>
      {isLoggedIn ? (
        <>
          {/* <Link to="/favorites" onClick={() => setOpen()} /> */}
          <button>Log Out</button>
        </>
      ) : (
        <>
          <Link to="/" onClick={() => setOpen()}>
            Home
          </Link>
          <Link to="/login" onClick={() => setOpen()}>
            Login
          </Link>
          <Link to="/register" onClick={() => setOpen()}>
            Register
          </Link>
        </>
      )}
    </StyledMenu>
  );
};
export default Menu;
