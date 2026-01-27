//ASSIGNMENT 2:

//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
    //1. filter() students who passed (marks ≥ 40)
    let res1 = students.filter(ele => ele.marks >= 40)
    console.log(res1);

  /**   2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
     let res2 = students.map(ele => {
        let grade = "";
        if(ele.marks >= 90)
            grade = "A"
        else if (ele.marks >= 75)
            grade = "B"
        else if(ele.marks >= 60)
            grade = "c"
        else{
            grade = "D"
        }
        return {
        ...ele,
        Grade : grade
    };    
     })
    console.log(res2);          

//   3. reduce() to calculate average marks
  let res3 = students.reduce((acc  , ele) => (acc + ele.marks )/students.length ,0)
  console.log("Calculate average marks ",res3);

//   4. find() the student who scored 92
let res4 = students.find(ele => ele.marks == 92)
console.log(res4);

//   5. findIndex() of student "Kiran"
let res5 = students.findIndex(ele => ele.name == "Kiran")
console.log(res5);