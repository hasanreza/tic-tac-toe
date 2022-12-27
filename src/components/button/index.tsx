import * as React from 'react';
import { IButtonProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Button extends React.PureComponent<IButtonProps> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button className={'btn ' + this.props.className} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;
