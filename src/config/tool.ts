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