import { ITileData } from '~/types';

export default function name(data: ITileData[]) {
    return data.findIndex((d) => !d.value) >= 0;
}
