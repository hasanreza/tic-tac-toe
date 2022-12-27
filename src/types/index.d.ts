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

export interface IGameBoxState {
    data: ITileData[];
}
export interface IGameBoxProps {
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

export interface IContainerState {
    width: number;
    turn: string;
}
