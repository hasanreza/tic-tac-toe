import * as React from 'react';
import { IOverlayProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

const Overlay = (props: IOverlayProps) => (
    <div
        className={`overlay d-flex justify-content-center align-items-center ${
            props.show ? 'overlay-shown' : 'overlay-hidden'
        }`}
        onClick={() => props.onClick!()}>
        {props.children}
    </div>
);

export default React.memo(Overlay, (prev, next) => prev.show === next.show);
