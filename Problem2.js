const input = { a: 1, b: 2, c: 3 };
const output = [];
Object.entries(input).map(([key,value]) =>{
    output.push({key:value})
})
console.log(output)