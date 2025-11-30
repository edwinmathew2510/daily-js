// day 33 ,2619. Array Prototype Last

Array.prototype.log=function(){
    if(this.length)return this.pop()
    return -1
}

 const arr = [1, 2, 3];
console.log( arr.log()) // 3