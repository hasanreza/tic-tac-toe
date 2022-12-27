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
import Label from '../label';
import XO from '../xo';

class Header extends React.Component<IHeaderProps> {
    constructor(props: IHeaderProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="px-2 gx-0 row justify-content-between align-items-center">
                <div className="col">
                    <Logo />
                </div>
                <div className="col text-center">
                    <Label className="bg-light bg-opacity-25">
                        <XO value={this.props.turn} />
                        <span className="ms-2">turn</span>
                    </Label>
                </div>
                <div className="col text-end">
                    <Button onClick={this.props.onReset} className="btn-sm btn-light me-1">
                        <img width={20} src={resetPic} />
                    </Button>
                </div>
            </div>
        );
    }
}

export default Header;
