import{ add,decrease,unin} from '../actions/index';
import {storeState} from '../storeTyping';

interface itemActionShape{
    type:string;
    data:number 
}
/**
 * 
 * @param state Object
 * @param action Object
 */
export const itemData = (state = {} as any, action : itemActionShape = {} as any):storeState => {
    let {data,...rest} = action;
    data = data? data :0;
    let newAction = {
        ...rest,
        data:data + 1
    }
    switch(action.type){
        case add:
            return (<any>Object).assign({},state,newAction);
        case decrease:
            return action;      
        default:
            return state;
    }
}
