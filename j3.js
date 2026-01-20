// =======================================================
// Assignment 1: Daily Temperature Analyzer
// =======================================================
// Scenario : You are analyzing daily temperatures recorded by a weather app.
//
// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];
//
// Tasks:
//   1. filter() temperatures above 35
//   2. map() to convert all temperatures from Celsius → Fahrenheit
//   3. reduce() to calculate average temperature
//   4. find() first temperature above 40
//   5. findIndex() of temperature 28
//

const temperatures = [32, 35, 28, 40, 38, 30, 42];

// 1. Temperatures above 35
const above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35:", above35);

// 2. Convert to Fahrenheit
const fahrenheitTemps = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Fahrenheit:", fahrenheitTemps);

// 3. Average temperature
const avgTemp =
  temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature:", avgTemp);

// 4. First temperature above 40
const firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First Above 40:", firstAbove40);

// 5. Index of temperature 28
const index28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", index28);


// =======================================================
// Assignment 2: Online Course Name Processor
// =======================================================
// Scenario : You are preparing a course list for display on a website.
//
// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];
//
// Tasks:
//   1. filter() courses with name length > 5
//   2. map() to convert course names to uppercase
//   3. reduce() to generate a single string:
//        "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
//   4. find() the course "react"
//   5. findIndex() of "node"
//

const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. Courses with length > 5
const longCourses = courses.filter(course => course.length > 5);
console.log("Length > 5:", longCourses);

// 2. Convert to uppercase
const upperCourses = courses.map(course => course.toUpperCase());
console.log("Uppercase:", upperCourses);

// 3. Single string using reduce
const courseString = upperCourses.reduce(
  (result, course) => result + " | " + course
);
console.log("Course String:", courseString);

// 4. Find "react"
const foundReact = courses.find(course => course === "react");
console.log("Found React:", foundReact);

// 5. Index of "node"
const indexNode = courses.findIndex(course => course === "node");
console.log("Index of node:", indexNode);


// =======================================================
// Assignment 3: Student Marks List
// =======================================================
// Scenario : You receive marks from an exam system.
//
// Test data:
// const marks = [78, 92, 35, 88, 40, 67];
//
// Tasks:
//   1. filter() marks ≥ 40 (pass marks)
//   2. map() to add 5 grace marks to each student
//   3. reduce() to find highest mark
//   4. find() first mark below 40
//   5. findIndex() of mark 92
//

const marks = [78, 92, 35, 88, 40, 67];

// 1. Pass marks (≥ 40)
const passedMarks = marks.filter(mark => mark >= 40);
console.log("Passed Marks:", passedMarks);

// 2. Add 5 grace marks
const graceMarks = marks.map(mark => mark + 5);
console.log("Grace Marks:", graceMarks);

// 3. Highest mark
const highestMark = marks.reduce(
  (max, mark) => (mark > max ? mark : max),
  marks[0]
);
console.log("Highest Mark:", highestMark);

// 4. First mark below 40
const firstFail = marks.find(mark => mark < 40);
console.log("First Fail:", firstFail);

// 5. Index of mark 92
const index92 = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", index92);
