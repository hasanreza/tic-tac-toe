import * as React from 'react';
import { ITileBoxProps } from '~/types';
import utils from '~/utils';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import Tile from './tile';
import DrawLine from './draw-line';

const TileBox = (props: ITileBoxProps) => (
    <div className="game-box row g-0" style={{ width: props.width, height: props.width }}>
        {props.data.map((tileData) => (
            <Tile data={tileData} key={tileData.id} onClick={props.onTileClick} />
        ))}

        {props.drawLine && (
            <DrawLine
                points={utils.checkResult(props.data)}
                turn={props.turn}
                tileWidth={props.width / 3}
                handleTransitionEnd={() => props.handleTransitionEnd()}
            />
        )}
    </div>
);

export default React.memo(TileBox, (prev, next) => prev.data === next.data);
