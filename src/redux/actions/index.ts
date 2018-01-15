export const add = 'add';
export const decrease = 'decrease';

type unin= number | string;

interface addItems {
    type:string;
    item:Array<unin>
}

export const addItem = (item)=>{
    return {
        type:add,
        item:item
    }
}