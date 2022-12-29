import { ReactNode } from 'react';

declare module '*.jpg';
declare module '*.png';
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
declare module '*.webp';

interface IComponentProps {
    children?: ReactNode;
}
interface IElementProps {
    className?: string;
    onClick?: () => void;
}

export interface IBoxProps extends IComponentProps, IElementProps {
    size: number;
}
export interface IBoxState {
    size: number;
}

export interface ITileBoxState {}
export interface ITileBoxProps {
    width: number;
    turn: string;
    data: ITileData[];
    onTileClick: (index: number) => void;
}

export interface ITileProps {
    data: ITileData;
    onClick: (index: number) => void;
}

export interface ITileData {
    id: number;
    value: string | null;
}

export interface IXOProps {
    value: string;
}
export interface IHeaderProps {
    turn: string;
    onReset: () => void;
}

export interface IPlayer {
    isCPU: boolean;
    score: number;
    name: string;
}
export interface IGameState {
    width: number;
    turn: string;
    data: ITileData[];
    active: boolean;
    players: IPlayer[];
    rounds: number;
}

export interface IFooterProps {
    players: IPlayer[];
    rounds: number;
}

export interface IButtonProps extends IComponentProps, IElementProps {}
export interface ILabelProps extends IComponentProps, IElementProps {}
export interface IOverlayProps extends IComponentProps, IElementProps {
    show: boolean;
}
