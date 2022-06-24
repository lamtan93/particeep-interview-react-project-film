import React from 'react';
const Header = ({
  words,
}) => {
    /* eslint-disable */
    return (
        <div className='header'>
            <h3>{words?.BIENVENUE_TITLE}</h3>
            <div className='menu'>
                <a href='#'>Menu</a>
                <a href='#' >Account</a>
                <a target="_blank" href='https://www.linkedin.com/in/lamtan93/' >About me :)</a>
            </div>
        </div>
    )
}

export default Header;