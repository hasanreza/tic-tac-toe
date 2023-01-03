import * as React from 'react';
import { ITileProps } from '~/types';
import XO from '../xo';

/**
 * import styles
 */
import './style.scss';

const Tile = (props: ITileProps) => {
    const { id, value } = props.data;

    return (
        <div
            onClick={() => props.onClick(id)}
            className="tile col-4 position-relative z-index-1 d-flex justify-content-center flex-column">
            <div className="align-items-center d-flex justify-content-center">
                {value && <XO value={value} />}
            </div>
        </div>
    );
};

export default React.memo(Tile, (prev, next) => prev.data.value === next.data.value);
