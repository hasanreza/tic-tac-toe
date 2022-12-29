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

        this.translateY(element);
    }

    translateY = (element: HTMLDivElement) => {
        const p1 = this.props.points[0],
            top =
                Math.floor(p1 / 3) * //row index
                (100 / 3), //row height
            currentTransform = element.style.getPropertyValue('transform');
        console.log(currentTransform);

        element.style.transform = `${currentTransform}`;
    };
}

export default DrawLine;
