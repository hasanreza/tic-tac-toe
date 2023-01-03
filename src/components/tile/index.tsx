import * as React from 'react';
import { ITileProps } from '~/types';
import XO from '../xo';

/**
 * import styles
 */
import './style.scss';

class Tile extends React.PureComponent<ITileProps> {
    render() {
        const { id, value } = this.props.data;
        console.log('tile rendered');

        return (
            <div
                onClick={() => this.props.onClick(id)}
                className="tile col-4 position-relative z-index-1 d-flex justify-content-center flex-column">
                <div className="align-items-center d-flex justify-content-center">
                    {value && <XO value={value} />}
                </div>
            </div>
        );
    }

    handleClick = () => {};
}

export default Tile;
