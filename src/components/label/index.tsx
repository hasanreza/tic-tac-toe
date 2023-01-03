import * as React from 'react';
import { ILabelProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

const Label = (props: ILabelProps) => (
    <span
        className={`label d-flex align-items-center justify-content-center p-2 ${props.className}`}>
        {props.children}
    </span>
);

export default Label;
