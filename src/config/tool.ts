export let Tool;

Tool={
    alert:function(string?:String){
        alert(string);
    },
    bind:function(instance:object,methods?:Array<string>){
        let reference;
        if(!methods || methods.length==0)
            return;
        for(let i=0;i<methods.length;i++){
            let waitR=methods[i]
            reference=instance[waitR];
            if(reference)
                instance[waitR] = instance[waitR].bind(instance);
        }
    }
}
Tool.redux = {
    combineReducer : function(...objectList:Array<object>){
      let length :number= objectList.length;
      let reducerObject = {};
      if(length === 1){
        return objectList[0];
      }
        
      
      for(let i=1;i<length;i++){
        reducerObject = objectList[0];
        for(let item in objectList[i]){
          if(objectList[i].hasOwnProperty(item))
            reducerObject[item] = objectList[i][item];
        }
      }
      return reducerObject;
      
    },
    filterAction : function(types:Array<string>,...originActions:Array<object>){
      let originActionsObj = this.combineReducer(...originActions);
      let newActions = {};
      let typeLength = types.length;
      let originActionsLength = originActions.length;
      
      
      for(let i=0;i<typeLength;i++){
        for(let item in originActionsObj){
          if(types[i]==item && originActionsObj.hasOwnProperty(types[i]))
            newActions[item] = originActionsObj[item];
        }
      }
      return newActions;
    }
}
