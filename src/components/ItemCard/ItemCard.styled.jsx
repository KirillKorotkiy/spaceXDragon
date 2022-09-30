import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.img`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 400px;
    height: auto;
  }
`;
export const Wrapper = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Model = styled.h2``;
export const NavLink = styled(Link)`
  flex-basis: 45%;
  text-decoration: none;
  color: #ffffff;
  text-transform: uppercase;
  padding-bottom: 20px;
  transition-property: background-color, color;
  transition-duration: 500ms;
  :hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
