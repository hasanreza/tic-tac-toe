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
    private transforms = {
        translateY: 'translateY(-50%)',
        rotate45: 'rotate(45deg)',
        rotate90: 'rotate(90deg)'
    };

    constructor(props: IDrawLineProps) {
        super(props);
        this.element = React.createRef();
    }
    render() {
        return (
            <div ref={this.element} className="line">
                <div className="h-100" onTransitionEnd={() => this.props.handleTransitionEnd()} />
            </div>
        );
    }

    override componentDidMount() {
        const element = this.element.current!;

        //activate slide width animation
        setTimeout(
            () => element.classList.add(`line-${this.props.turn == 'x' ? 'primary' : 'secondary'}`),
            1
        );

        this.translate(element);
    }

    translate = (element: HTMLDivElement) => {
        const p1 = this.props.points[0],
            p2 = this.props.points[1];

        let translate = this.transforms.translateY,
            top: number,
            factor = 1;

        //if it's vertical
        if (p2 - p1 === 6) {
            translate += ` ${this.transforms.rotate90}`;
            factor =
                (p1 - 1) * // factor
                -1; // determines to place the line forward or backward
            top = factor * this.props.tileWidth; //row height;
        }
        //it's oblique
        else if (p2 - p1 === 4 || p2 - p1 === 8) {
            factor =
                (p1 - 1) * // factor
                -1; // determines to place the line forward or backward
            translate += ` rotate(${45 * factor}deg)`;
            top = 0;
            element.classList.add('oblique');
        }
        //it's horizontal
        else
            top =
                (Math.floor(p1 / 3) - 1) * //row index
                this.props.tileWidth; //row height;

        translate += ` translateY(${top}px)`;

        element.style.transform = translate;
    };
}

export default DrawLine;
