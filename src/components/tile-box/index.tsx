import * as React from 'react';
import { ITileBoxProps, ITileBoxState, ITileData } from '~/types';
import isVertical from '~/utils/is-vertical';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import Tile from '../tile';

class TileBox extends React.Component<ITileBoxProps, ITileBoxState> {
    render() {
        return (
            <div
                className="game-box row g-0"
                style={{ width: this.props.width, height: this.props.width }}>
                {this.props.data.map((tileData) => (
                    <Tile data={tileData} key={tileData.id} onClick={this.props.onTileClick} />
                ))}
            </div>
        );
    }

    calcDimensions = () => (isVertical() ? window.innerWidth : window.innerHeight) * 0.75;
}

export default TileBox;
