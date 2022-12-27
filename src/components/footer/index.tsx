import * as React from 'react';
import Label from '../label';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Footer extends React.Component {
    render() {
        return (
            <div className="row gx-0 px-2">
                <div className="col">
                    <Label className="bg-primary"></Label>
                </div>
                <div className="col">
                    <Label className="bg-light"></Label>
                </div>
                <div className="col">
                    <Label className="bg-secondary"></Label>
                </div>
            </div>
        );
    }
}

export default Footer;
