import * as React from 'react';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */
import TileBox from '../tile-box';
import { IGameState, ITileData } from '~/types';
import Header from '../header';
import Footer from '../footer';
import checkResult from '~/utils/check-result';

class Game extends React.Component<Readonly<{}>, IGameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            width: this.calcWidth(),
            turn: this.pickTurn(),
            data: this.generateTileStates()
        };
    }

    render() {
        return (
            <div
                className="position-absolute h-100 top-0 start-0 end-0 mx-auto py-3"
                style={{ width: this.state.width }}>
                <Header turn={this.state.turn} onReset={() => this.reset()} />

                <TileBox
                    width={this.state.width}
                    turn={this.state.turn}
                    onTileClick={this.handleTileClick}
                    data={this.state.data}
                />

                <Footer></Footer>
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

        this.setState({ data: this.generateTileStates() });
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

    handleTileClick = (index: number) => {
        if (this.state.data[index].value) return;

        const newData = [...this.state.data];
        newData[index].value = this.state.turn;
        this.setState({ data: newData });

        // if (checkResult(newData))
        this.switchTurn();
    };
}

export default Game;
