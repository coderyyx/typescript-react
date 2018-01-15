type dataShape = object | Array<any>;

export interface storeState{
    type:string;
    path?:string;
    data?:dataShape
}