//Assignment 1: Daily Temperature Analyzer

//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

//Tasks:
   // 1. filter() temperatures above 35
    let res =  temperatures.filter(ele => ele > 35)
    console.log("The temperatures above 35 are : ", res);

  //  2. map() to convert all temperatures from Celsius → Fahrenheit
   let res1 = temperatures.map(ele => (ele * 9/5) + 32)
   console.log("All temperatures from Celsius → Fahrenheit " , res1);

   // 3. reduce() to calculate average temperature
   let res2 = temperatures.reduce((acc = 0, ele) => acc + ele)
   console.log("To calculate average temperature ", res2);

  //  4. find() first temperature above 40
  let res3 = temperatures.find(ele => ele > 40)
  console.log("first temperature above 40 :",res3);

  //  5. findIndex() of temperature 28
  let res4 = temperatures.findIndex(ele => ele = 28)
  console.log("temperature 28 of index : ",res4);
