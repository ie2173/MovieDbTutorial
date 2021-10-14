//how to make a header:
//import react
import React from 'react';
//import links to use in header
import { Link } from 'react-router-dom';
//import images you will use on the header:
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';
//import syles that we made in the styles.js for the header
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
           <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;