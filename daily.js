// day 35 , 2724. Sort By

function sortby(fn,arr){
    return arr.sort((a,b)=>fn(a)-fn(b))
}
let s=sortby((x) => x,[5,4,1,2,3])
console.log(s)