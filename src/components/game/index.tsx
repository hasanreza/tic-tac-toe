import * as React from 'react';
/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import TileBox from '../tile-box';
import { IGameState, IPlayer, ITileData } from '~/types';
import Header from '../header';
import Footer from '../footer';
import Overlay from '../overlay';
import utils from '~/utils';

class Game extends React.Component<Readonly<{}>, IGameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            width: this.calcWidth(),
            turn: this.pickTurn(),
            data: this.generateTileStates(),
            active: false,
            players: this.generatePlayers(),
            rounds: 0,
            drawLine: false
        };
    }

    render() {
        return (
            <>
                <div
                    className="position-absolute h-100 top-0 start-0 end-0 mx-auto py-3 d-flex flex-column justify-content-around"
                    style={{ width: this.state.width }}>
                    <Header turn={this.state.turn} onReset={this.reset} />

                    <TileBox
                        width={this.state.width}
                        turn={this.state.turn}
                        onTileClick={this.handleTileClick}
                        data={this.state.data}
                        drawLine={this.state.drawLine}
                    />

                    <Footer players={this.state.players} rounds={this.state.rounds} />

                    <Overlay show={!this.state.active} onClick={this.handleOverlayClick}>
                        <div className="h1 text-primary">Start</div>
                    </Overlay>
                </div>
            </>
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
            const newWidth = this.calcWidth();
            if (newWidth != this.state.width)
                timeout = window.setTimeout(() => this.setState({ width: newWidth }), delay);
        });
    };

    pickTurn = () => {
        const turns = ['x', 'o'];
        return turns[Math.floor(Math.random() * turns.length)];
    };

    switchTurn = () => {
        this.setState({ turn: this.state.turn == 'x' ? 'o' : 'x' });
    };

    reset = () => {
        console.log('reset');

        this.setState({ data: this.generateTileStates(), drawLine: false });
    };

    generateTileStates = () => {
        return [...Array(9).keys()].map((index) => {
            const tileData: ITileData = {
                id: index,
                value: null
            };

            return tileData;
        });
    };

    generatePlayers = () => {
        return [
            { name: 'you', score: 0, isCPU: false },
            {
                name: 'cpu',
                score: 0,
                isCPU: true
            }
        ];
    };

    handleTileClick = (index: number) => {
        if (this.state.data[index].value) return;

        const newData = [...this.state.data];
        newData[index].value = this.state.turn;
        this.setState({ data: newData });

        // if ()
        this.switchTurn();

        const dots = utils.checkResult(newData);
        if (dots.length) {
            this.setState({ drawLine: true });
        }
    };

    handleOverlayClick = () => {
        this.setState({ active: true });
    };

    stopGame = () => {
        this.setState({ active: false });
    };
}

export default Game;
