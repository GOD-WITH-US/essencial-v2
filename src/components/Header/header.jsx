import React from 'react';
import PrimarySearchAppBar from './Contents/navbar';
import"../../styles/header.scss"
const Header = () => {
    return (
        <div className='header'>  
          <PrimarySearchAppBar />
        </div>
    );
};

export default Header;