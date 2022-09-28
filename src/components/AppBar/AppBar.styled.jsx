import styled from 'styled-components';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px 30px 10px 0px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin-bottom: 80px;
`;

export const MainLogo = styled(Logo)`
  width: 300px;
  height: 50px;
`;
export const Links = styled(NavLink)`
  font-size: 24px;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  :not(:last-child) {
    margin-right: 20px;
  }
`;
export const Navigation = styled.div``;
