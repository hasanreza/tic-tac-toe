import { ReactNode } from 'react';

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';

interface IComponentProps {
    children?: ReactNode;
}

export interface IBoxProps extends IComponentProps {
    size: number;
    className: string;
}
export interface IBoxState {
    size: number;
}

export interface ITileBoxState {
    data: ITileData[];
}
export interface ITileBoxProps {
    width: number;
    turn: string;
    onClick: () => void;
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
}

export interface IGameState {
    width: number;
    turn: string;
}
