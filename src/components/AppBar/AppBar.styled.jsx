import styled from 'styled-components';
import {ReactComponent as Logo} from 'icons/logo.svg'
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
    padding: 20px;
    background-color: #000000 ;
    display: flex;
    align-items: center;
`

export const MainLogo = styled(Logo)`
    width: 300px;
    height: 80px;
`
export const Links = styled(NavLink)`
    font-size: 24px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 700;
    :not(:last-child){
        margin-right: 20px;
    }
`


