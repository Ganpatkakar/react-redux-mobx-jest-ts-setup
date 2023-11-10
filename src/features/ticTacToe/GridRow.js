import React from 'react';
import GridCol from './GridCol';
import './ticTacToe.css';

export default function GridRow(props) {
    const {row, rowIndex} = props;

    return (
        <div className="gridRow">
            {
                row.map((col, colIndex) => {
                    return <GridCol col={col} rowIndex={rowIndex} colIndex={colIndex}/>
                })
            }
        </div>
    )
}