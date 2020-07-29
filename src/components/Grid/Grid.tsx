import React, {useState} from 'react';
import "./Grid.scss";
import Block from "../Block/Block";
import {generateBlocks} from "../../utils"

const Grid: React.FC = () => {

    const [blocks, setBlocks] = useState(generateBlocks());
    const renderBlocks = (): React.ReactNode => {
        return blocks.map((row, rowIndex) => 
            row.map((block, colIndex) => <Block key={`${rowIndex}-${colIndex}`} />
        ))
    }

    return (
        <div className="Grid">
            {renderBlocks()}
        </div>
    );
};

export default Grid;