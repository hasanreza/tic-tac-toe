import * as React from 'react';
import { ITileBoxProps, ITileBoxState, ITileData } from '~/types';
import utils from '~/utils';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import Tile from '../tile';
import DrawLine from '../draw-line';

class TileBox extends React.PureComponent<ITileBoxProps, ITileBoxState> {
    constructor(props: ITileBoxProps) {
        super(props);
        this.state = {
            drawLine: false
        };
    }
    render() {
        return (
            <>
                <div
                    className="game-box row g-0"
                    style={{ width: this.props.width, height: this.props.width }}>
                    {this.props.data.map((tileData) => (
                        <Tile data={tileData} key={tileData.id} onClick={this.props.onTileClick} />
                    ))}

                    {this.props.drawLine && (
                        <DrawLine
                            points={utils.checkResult(this.props.data)}
                            turn={this.props.turn}
                            tileWidth={this.props.width / 3}
                            handleTransitionEnd={() => this.props.handleTransitionEnd()}
                        />
                    )}
                </div>
            </>
        );
    }

    calcDimensions = () => (utils.isVertical() ? window.innerWidth : window.innerHeight) * 0.75;
}

export default TileBox;
