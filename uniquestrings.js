let arr = ["abc", "hello", 'c', 'd', "abc", "c", "d"];
let ansObj = {};
for(let i = 0; i < arr.length; i++) {
    ansObj[arr[i]] = "put";
}
console.log(Object.keys(ansObj));