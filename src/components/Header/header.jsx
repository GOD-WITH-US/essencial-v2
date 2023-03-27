import React from 'react';
import PrimarySearchAppBar from './Contents/navbar';

const Header = () => {
    return (
        <div className='header'>  
          <PrimarySearchAppBar xs={12} sm={12} md={12} lg={12} xl={12}/>
        </div>
    );
};

export default Header;