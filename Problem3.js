const input = [{ a: 1 }, { b: 2 }, { c: 3 }]
let output = {}
input.map(ele=>{
    output =  {...output,...ele}
})

// here can be more than two ways. let's see const
console.log(output)