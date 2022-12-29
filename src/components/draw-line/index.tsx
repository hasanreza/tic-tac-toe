import * as React from 'react';
import { IDrawLineProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

class DrawLine extends React.Component<IDrawLineProps> {
    private element: React.RefObject<HTMLDivElement>;

    constructor(props: IDrawLineProps) {
        super(props);
        this.element = React.createRef();
    }
    render() {
        console.log(this.props.points);

        return (
            <div ref={this.element} className="line">
                <div className="h-100" />
            </div>
        );
    }

    override componentDidMount() {
        const element = this.element.current!;

        //activate slide width animation
        setTimeout(
            () => element.classList.add(`line-${this.props.turn == 'o' ? 'primary' : 'secondary'}`),
            1
        );

        this.setTopPosition(element);
    }

    setTopPosition = (element: HTMLDivElement) => {
        const p1 = this.props.points[0],
            p2 = this.props.points[1];

        const top =
            Math.floor(p1 / 3) * //row
                (100 / 3) + //row height
            100 / 3 / 2; //middle of the row;

        // if(p1 / 3 !==)

        element.style.top = `${top}%`;
    };
}

export default DrawLine;
