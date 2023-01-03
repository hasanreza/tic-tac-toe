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

const Header = (props: IHeaderProps) => (
    <div className="px-2 gx-0 row justify-content-between align-items-center">
        <div className="col">
            <Logo />
        </div>

        <div className="col text-center">
            <Label className="bg-light text-light bg-opacity-25">
                <XO value={props.turn} />
                <span className="ms-2">turn</span>
            </Label>
        </div>

        <div className="col text-end">
            <Button onClick={props.onReset} className="btn-sm btn-light me-1">
                <img width={20} src={resetPic} />
            </Button>
        </div>
    </div>
);
export default React.memo(Header);
