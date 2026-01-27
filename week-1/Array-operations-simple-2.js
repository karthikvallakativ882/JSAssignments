//Assignment 2: Online Course Name Processor

//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
   // 1. filter() courses with name length > 5
   let res1 = courses.filter(ele => ele.length > 5)
   console.log("courses with name length > 5 ",res1);

  //  2. map() to convert course names to uppercase
     let res2 = courses.map(ele =>  ele.toUpperCase())
     console.log("convert course names to uppercase ",res2);

 //   3. reduce() to generate a single string:
  //            "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
  let res3 = courses.reduce((acc , ele ) => {
     return acc + "|" +  ele.toUpperCase()
    },"")
  console.log("to generate a single string: ", res3);

 //   4. find() the course "react"
 let res4 = courses.find(ele => ele == "react");
 console.log( "the course react : ", res4);

 //   5. findIndex() of "node"
 let res5 = courses.findIndex(ele => ele =="node")
 console.log("findIndex() of node ",res5 );