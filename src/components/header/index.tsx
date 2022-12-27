import * as React from 'react';
import { IHeaderProps } from '~/types';
import Logo from '../logo';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Base extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="p-2">
                <Logo />
            </div>
        );
    }
}

export default Base;
