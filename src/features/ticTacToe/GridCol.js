import React from 'react';
import './ticTacToe.css';

export default function GridCol(props) {
    const {col, colIndex, rowIndex} = props;

    return (
        <div className='gridCol' data-row={rowIndex} data-col={colIndex}>{col}</div>
    )
}