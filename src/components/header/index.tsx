import * as React from 'react';
import { IHeaderProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import Logo from '../logo';
import Button from '../button';

/**
 * import assets
 */
import resetPic from '~/assets/img/reset.svg';

class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="p-2 d-flex justify-content-between align-items-center">
                <Logo />
                <Button onClick={this.props.onReset} className="btn-sm btn-light me-1">
                    <img width={20} src={resetPic} />
                </Button>
            </div>
        );
    }
}

export default Header;
