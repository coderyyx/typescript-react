type dataShape = object | Array<any> | number | string;

export interface storeState{
    type:string;
    path?:string;
    data?:dataShape
}