import React from 'react';

import './styles.css';

interface HeaderProps{
    title: String;
}

const Header: React.FunctionComponent<HeaderProps> = ({title}) =>{
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
