import * as React from 'react';
import { IXOProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

const XO = (props: IXOProps) => {
    if (['x', 'o'].indexOf(props.value) < 0) throw new Error('value must be wether "O" or "X"');

    return <span className={props.value} />;
};

export default XO;
