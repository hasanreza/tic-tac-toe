import * as React from 'react';
import { IButtonProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

const Button = (props: IButtonProps) => (
    <button className={'btn ' + props.className} onClick={props.onClick}>
        {props.children}
    </button>
);

export default React.memo(Button, (prev, next) => prev.className === next.className);
