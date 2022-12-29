import * as React from 'react';
import { IFooterProps } from '~/types';
import Label from '../label';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class Footer extends React.Component<IFooterProps> {
    render() {
        if (this.props.players.length != 2) throw new Error('there must be 2 players');

        const player1 = this.props.players[0],
            player2 = this.props.players[1];

        return (
            <div className="row gx-4 px-2">
                <div className="col">
                    <Label className="bg-primary flex-column">
                        <span className="h3 mb-0">{player1.score}</span>x ({player1.name})
                    </Label>
                </div>
                <div className="col">
                    <Label className="bg-light flex-column">
                        <span className="h3 mb-0">
                            {this.props.rounds - player1.score - player2.score}
                        </span>
                        ties
                    </Label>
                </div>
                <div className="col">
                    <Label className="bg-secondary flex-column">
                        <span className="h3 mb-0">{player2.score}</span>
                        o({player2.name})
                    </Label>
                </div>
            </div>
        );
    }
}

export default Footer;
