import * as React from 'react';
import { IXOProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class XO extends React.PureComponent<IXOProps> {
    render() {
        if (['x', 'o'].indexOf(this.props.value) < 0)
            throw new Error('value must be wether "O" or "X"');

        return <span className={this.props.value} />;
    }
}

export default XO;
