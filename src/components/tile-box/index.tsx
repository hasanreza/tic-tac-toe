import * as React from 'react';
import { ITileBoxProps, ITileBoxState, ITileData } from '~/types';
import isVertical from '~/utils/isVertical';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import Tile from '../tile';

class TileBox extends React.Component<ITileBoxProps, ITileBoxState> {
    constructor(props: any) {
        super(props);
        this.state = { data: this.generateTileStates() };
    }

    render() {
        return (
            <div
                className="game-box row g-0"
                style={{ width: this.props.width, height: this.props.width }}>
                {this.state.data.map((tileData) => (
                    <Tile data={tileData} key={tileData.id} onClick={this.handleTileClick} />
                ))}
            </div>
        );
    }

    calcDimensions = () => (isVertical() ? window.innerWidth : window.innerHeight) * 0.75;

    generateTileStates = () => {
        return [...Array(9).keys()].map((index) => {
            const tileData: ITileData = {
                id: index,
                value: null
            };

            return tileData;
        });
    };

    handleTileClick = (index: number) => {
        if (this.state.data[index].value) return;

        const newData = [...this.state.data];
        newData[index].value = this.props.turn;
        this.setState({ data: newData });

        //switch turn
        this.props.onClick();
    };
}

export default TileBox;
