import React from 'react';
import "./Header.scss";
import NumberDisplay from "../NumberDisplay/NumberDisplay";

const Header: React.FC = () => {
    return (
        <div className="Header">
            <NumberDisplay value={0}/>
            <div className="Face"><span role="img" aria-label="face">😂</span></div>
            <NumberDisplay value={23}/>
        </div>
    );
};

export default Header;