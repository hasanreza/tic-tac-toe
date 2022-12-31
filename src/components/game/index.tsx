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
    private isActive = false;

    constructor(props: any) {
        super(props);
        this.state = {
            width: this.calcWidth(),
            turn: this.pickTurn(),
            data: this.generateTileStates(),
            players: this.generatePlayers(),
            rounds: 0,
            drawLine: false,
            showOverlay: true
        };
    }

    render() {
        return (
            <>
                <div
                    className="position-absolute h-100 top-0 start-0 end-0 mx-auto py-3 d-flex flex-column justify-content-around"
                    style={{ width: this.state.width }}>
                    <Header turn={this.state.turn} onReset={this.resetGame} />

                    <TileBox
                        width={this.state.width}
                        turn={this.state.turn}
                        onTileClick={this.handleTileClick}
                        data={this.state.data}
                        drawLine={this.state.drawLine}
                        handleTransitionEnd={this.resetRound}
                    />

                    <Footer players={this.state.players} rounds={this.state.rounds} />

                    <Overlay show={this.state.showOverlay} onClick={this.handleOverlayClick}>
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

    resetRound = (tie?: boolean) => {
        this.setState({
            data: this.generateTileStates(),
            drawLine: false,
            showOverlay: true,
            rounds: this.state.rounds + 1
        });
        if (!tie) this.setState({ players: this.getNewPlayerScores() });
        this.isActive = true;
    };

    resetGame = () => {
        this.setState({
            rounds: 0,
            data: this.generateTileStates(),
            drawLine: false,
            showOverlay: false,
            players: this.generatePlayers()
        });
        this.isActive = true;
    };

    generateTileStates = () => {
        const data = [...Array(9).keys()].map((index) => {
            const tileData: ITileData = {
                id: index,
                value: null
            };

            return tileData;
        });
        console.log(JSON.stringify(data));
        return data;
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
        if (this.state.data[index].value || !this.isActive) return;

        const newData = [...this.state.data];
        newData[index].value = this.state.turn;

        this.setState({ data: newData });

        const dots = utils.checkResult(newData);
        //someone won
        if (dots.length) {
            this.isActive = false;
            this.setState({ drawLine: true });
        } else this.switchTurn();

        if (!utils.canPlay(newData)) {
            this.resetRound(true);
        }
    };

    handleOverlayClick = () => {
        this.setState({ showOverlay: false });
        this.isActive = true;
    };

    getNewPlayerScores = () => {
        const players = [...this.state.players],
            index = this.state.turn === 'x' ? 0 : 1;

        players[index].score++;

        return players;
    };
}

export default Game;
