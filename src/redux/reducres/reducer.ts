import{ add,decrease,unin} from '../actions/index';
import {storeState} from '../storeTyping';

interface itemActionShape{
    type:string;
    item?:Array<unin>
}
/**
 * 
 * @param state Object
 * @param action Object
 */
export const reducerItem = (state = {} as any, action : itemActionShape = {} as any):storeState => {
    switch(action.type){
        case add:
            return (<any>Object).assign({},state,action);
        case decrease:
            return action;      
        default:
            return state;
    }
}
