//day 36,2722. Join Two Arrays by ID

function sortedArr(arr1,arr2){

    let map= new Map()

    for(const obj of arr1){
        map.set(obj.id,{...obj})
    }
    for(const obj of arr2){
        if(map.has(obj.id)){
            map.set(obj.id,{...map.get(obj.id),...obj})
        }
        else{
            map.set(obj.id,{...obj})
        }
    }
    return Array.from(map.values()).sort((a,b)=>a.id-b.id)
}



let res=sortedArr([
  { id: 1, x: 2 },
  { id: 2, x: 9 }
],[
  { id: 1, x: 2 },
  { id: 3, x: 9 }
])
console.log(res)