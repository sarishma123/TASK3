// bad habits:never muted objects
let number=[20,39,56,43,23,55]
number[4]=55
number[6]=1
console.log(number)

// imutability example
 let fruits=["mango","kiwi","pineapple"]
 let newfruits=[...fruits,"orange","pomoganete"]
 console.log("original array",fruits)
 console.log("changed array",newfruits)