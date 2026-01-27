//Assignment 2: Exam Result Summary

//Scenario : Marks are stored subject-wise for a student.

//Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//Tasks:
  //  1. Calculate total marks
  let total_marks = Object.values(marks).reduce((acc , ele) => acc + ele,0);
  console.log("Total marks :",total_marks);
  
  //  2. Calculate average marks
  let average_marks = Object.values(marks).reduce((acc, ele) => (acc + ele)/Object.values(marks).length)
  console.log("Average of marks :",average_marks)

  //  3. Find the highest scoring subject
  let highest_sub = Object.entries(marks).reduce((acc,[key , valu]) =>{
     (valu > acc) ? {key,valu} : {key,acc} },
     );
  console.log("Highest ",highest_sub);

  //  4. Add a new subject computer: 90
  marks.computer = 90;
  console.log(marks)