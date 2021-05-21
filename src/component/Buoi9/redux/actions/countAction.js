export const Count_up = 'Count_up';
export const Count_down = 'Count_down';

export const countUp = payload=>{
    return{
        type: Count_up,
        payload,
    }
}

export const countDown = payload=>{
    return{
        type: Count_down,
        payload,
    }
}