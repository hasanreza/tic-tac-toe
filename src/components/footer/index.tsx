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
            <div className="row gx-0 px-2">
                <div className="col">
                    <Label className="bg-primary">
                        x ({player1.name})<br />
                        <span className="h3">{player1.score}</span>
                    </Label>
                </div>
                <div className="col">
                    <Label className="bg-light">
                        ties
                        <br />
                        <span className="h3">
                            {this.props.rounds - player1.score - player2.score}
                        </span>
                    </Label>
                </div>
                <div className="col">
                    <Label className="bg-secondary">
                        o({player2.name})<br />
                        <span className="h3">{player2.score}</span>
                    </Label>
                </div>
            </div>
        );
    }
}

export default Footer;
