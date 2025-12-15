//day 37,2705. Compact Object


function checkObject(obj){
    if(!obj)return obj;
    else if(typeof obj!=="object")return obj;

    if(Array.isArray(obj)){
        let clone =[];
        for(let item of obj){
            if(item)clone.push(checkObject(item))
        }
    return clone;
    }
    else{
        for(let key of Object.keys(obj)){
            if(!obj[key])delete obj[key];
            obj[key]=checkObject(obj[key])
        }
        return obj;
    }
}

let o1=[0,1,null]
console.log(checkObject(o1))