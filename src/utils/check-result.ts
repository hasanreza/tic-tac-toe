import { ITileData } from '~/types';

const checkResult = (data: ITileData[]) => {
    for (let i = 0; i < data.length; i++) {
        const first = data[i];
        if (!first.value) continue;

        for (let j = i + 1; j < data.length; j++) {
            const second = data[j];
            if (
                //doesnt have value
                !second.value ||
                //there is no number between them
                (j - i) % 2 !== 0 ||
                //it's continuosly but its not horizontally
                (j === i + 2 && i % 3 !== 0) ||
                //they are not in line
                (i !== 2 && j - i === 4)
            )
                continue;

            const indexBetween = (i + j) / 2;
            if (first.value === second.value && first.value === data[indexBetween].value)
                return [i, j];
        }
    }
    return [];
};
export default checkResult;
