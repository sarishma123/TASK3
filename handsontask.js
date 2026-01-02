    const students = [
        { name: "ram", age: 20, faculty: "BCA", marks: 34 },
        { name: "sita", age: 19, faculty: "BCA", marks: 23 },
        { name: "hari", age: 21, faculty: "BCA", marks: 55 }
      ]
      
    //   use of flter
      const passedStudents = students.filter(
        student => student.marks >= 30
      );
      
      console.log("passed student using filter:", passedStudents);
      
    //   use of map
    const studentInfo = students.map(student => ({
        name: student.name,
        age: student.age,
        marks:student.marks
      }));
      
      console.log("use of map for student:",studentInfo);
      


    // fucntion that return a new object without mofifying the oiginal one
    console.log("originnal array:",students)
    let modifiedobj=[...students,
    {name:"gita",age:18,faculty:"BCA",marks:45}
]
console.log("modified version:",modifiedobj)
