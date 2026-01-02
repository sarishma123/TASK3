// pure function
let add =(a,b) =>{
    return a+b
}

// impure fucntion:unpredictable so bit hard to debug
let radius=45
let calculateareaofcircle =(pi)=>{
    return pi*radius*radius
}
let area=calculateareaofcircle(3.1415)
console.log("area of circle:", area)

