let noofcolor=[0,1,2,3,4]
let arrofcolor=["red","yellow","orange","beige","khaki"]
console.log(arrofcolor[2])

// 2create a object
const book={
    title: "harry potter",
    author:"jk rowling",
    Pages: "400",
    publishedyear: "2012"
}
console.log(book.title),
console.log(book.author),
console.log(book.Pages),
console.log(book.publishedyear)

// 3.add a new property isread :true to an existing object immutably (return object)

const updateBook={...book,isread:true}
console.log(updateBook)

// task4
const student=[
    {name:"ram",grade:"4"},
    {name:"shyam",grade:"3"},
    {name:"sita",grade:"5"},
]
console.log(student)

// task5
 const employee=[
    name="code himalyan",
    location="thapathali",
    numberofemp="30",
 ]
 console.log(employee)


//  task6
let arr1=[10,20,30]
const newarray=arr1.map(arr1=>arr1+5)
console.log(newarray)

// task7
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

// adding new property immutably
const updatedCar = {
  ...car,
  color: "red"
};

console.log(car);
console.log(updatedCar);

// task8
const shoppinglist=[
    jacket,Shoes,blazer
]
