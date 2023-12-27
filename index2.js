// map, filter, arrow fns

// map
// given an array, give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4,5];
let newArray = [];
for(let i = 0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray)
newArray.push(input.map(i=>i*2));
console.log(newArray)


//filtering
// what if I tell u , given an input array, give me back all the even values from it

const names = ["Krishna","Ratan","Asuhtosh","Shubham","Radha"]

const filtering = names.filter(i=>i.startsWith("R"));
console.log(filtering)