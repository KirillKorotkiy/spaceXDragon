import { Header, MainLogo, Links } from './AppBar.styled';


export const AppBar = () => {

    return (
        <>
        <Header>
            <MainLogo/>
            <Links to="/"> Home </Links>
            <Links to="/login">Login </Links>
            <Links to="/register"> Register</Links>
        </Header>
        </>
    )
}

