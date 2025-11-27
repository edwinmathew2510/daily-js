// day 31,2727. Is Object Empty
const isEmpty = function(obj) {
if(Array.isArray(obj))return obj.length===0
let arr=Object.keys(obj)
return arr.length===0
};

console.log(isEmpty([null, false, 0]))
console.log(isEmpty({}))
