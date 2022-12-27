import * as React from 'react';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import TileBox from '../tile-box';
import { IGameState } from '~/types';
import Header from '../header';

class Game extends React.Component<Readonly<{}>, IGameState> {
    constructor(props: any) {
        super(props);
        this.state = { width: this.calcWidth(), turn: this.pickTurn() };
    }

    render() {
        return (
            <div
                className="position-absolute h-100 top-0 start-0 end-0 mx-auto py-3"
                style={{ width: this.state.width }}>
                <Header turn={this.state.turn} />
                <TileBox
                    width={this.state.width}
                    turn={this.state.turn}
                    onClick={this.switchTurn}
                />
            </div>
        );
    }

    override componentDidMount() {
        this.handleWindowResize();
    }

    override componentWillUnmount() {
        window.removeEventListener('resize', () => {
            console.log('unmount');
        });
    }

    calcWidth = () => {
        var height = window.innerHeight,
            width = (height * 9) / 16;
        return Math.min(width, window.innerWidth);
    };

    handleWindowResize = () => {
        const delay = 200;
        let timeout: number;

        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => this.setState({ width: this.calcWidth() }), delay);
        });
    };

    pickTurn = () => {
        const turns = ['x', 'o'];
        return turns[Math.floor(Math.random() * turns.length)];
    };

    switchTurn = () => {
        this.setState({ turn: this.state.turn == 'x' ? 'o' : 'x' });
    };
}

export default Game;
