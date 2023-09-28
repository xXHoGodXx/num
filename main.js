let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let str =0
let nums =0
let others =0

arr.filter ((item)=>  {
if (str =+ item.length) {
       str=item
}

}) 
arr.filter ((num)=>  {
if (nums =+ item.length) {
       nums=num
}

}) 
arr.filter ((oth)=>  {
if (oth =+ others.length) {
       others=oth
}

}) 

console.log(str);
console.log(nums);
console.log(others);