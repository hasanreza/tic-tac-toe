import React, { useEffect } from 'react';
import { IDrawLineProps } from '~/types';

/**
 * import styles
 */
import './style.scss';

/**
 * import components
 */

const DrawLine = (props: IDrawLineProps) => {
    const element = React.createRef<HTMLDivElement>(),
        transforms = {
            translateY: 'translateY(-50%)',
            rotate45: 'rotate(45deg)',
            rotate90: 'rotate(90deg)'
        };

    useEffect(() => {
        const elem = element.current!;

        //activate slide width animation
        setTimeout(
            () => elem.classList.add(`line-${props.turn == 'x' ? 'primary' : 'secondary'}`),
            1
        );

        translate(elem);
    });

    const translate = (element: HTMLDivElement) => {
        const p1 = props.points[0],
            p2 = props.points[1];

        let translate = transforms.translateY,
            top: number,
            factor = 1;

        //if it's vertical
        if (p2 - p1 === 6) {
            translate += ` ${transforms.rotate90}`;
            factor =
                (p1 - 1) * // factor
                -1; // determines to place the line forward or backward
            top = factor * props.tileWidth; //row height;
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
                props.tileWidth; //row height;

        translate += ` translateY(${top}px)`;

        element.style.transform = translate;
    };

    return (
        <div ref={element} className="line">
            <div className="h-100" onTransitionEnd={() => props.handleTransitionEnd()} />
        </div>
    );
};

export default DrawLine;
