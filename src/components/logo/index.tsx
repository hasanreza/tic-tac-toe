import * as React from 'react';
import XO from '../xo';

/**
 * import components
 */

const Logo = () => {
    return (
        <div className="logo">
            <XO value="x" />
            <XO value="o" />
        </div>
    );
};

export default Logo;
