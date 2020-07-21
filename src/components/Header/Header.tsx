import React from 'react';
import "./Header.scss";
import NumberDisplay from "../NumberDisplay/NumberDisplay";

const Header: React.FC = () => {
    return (
        <div className="Header">
            <NumberDisplay />
        </div>
    );
};

export default Header;