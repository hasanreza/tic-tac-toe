import * as React from 'react';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import XO from '../xo';

const Logo = () => {
    return (
        <div className="logo">
            <XO value="x" />
            <XO value="o" />
        </div>
    );
};

export default Logo;
