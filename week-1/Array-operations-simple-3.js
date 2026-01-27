//Assignment 3: Student Marks List

//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
//    1. filter() marks ≥ 40 (pass marks)
 let res1 = marks.filter( ele => ele >= 40)
 console.log("Pass marks : ", res1);

 //   2. map() to add 5 grace marks to each student
  let res2 = marks.map( ele => ele + 5)
  console.log("Marks after adding grace marks : ", res2);

  //  3. reduce() to find highest mark
  let res3 = marks.reduce((acc , ele) => {
   return (acc < ele) ?ele : acc
  },);
  console.log("Highest marks : ", res3);

  //  4. find() first mark below 40
  let res4 = marks.find( ele => ele < 40)
  console.log("First mark below 40 : ", res4);

  //  5. findIndex() of mark 92
  let res5 = marks.findIndex( ele => ele == 92)
  console.log("Index of mark 92 : ", res5);