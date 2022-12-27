import * as React from 'react';
import { ILabelProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Label extends React.PureComponent<ILabelProps> {
    render() {
        return (
            <span
                className={`label d-flex align-items-center justify-content-center p-2 ${this.props.className}`}>
                {this.props.children}
            </span>
        );
    }
}

export default Label;
