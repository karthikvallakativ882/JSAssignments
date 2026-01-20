// =======================================================
// Assignment 1: User Profile Manager
// -------------------------------------------------------
// Scenario : You are managing a logged-in user’s profile
// in a web application.
//
// Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1. Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";

// 3. Update role from "student" to "admin"
user.role = "admin";

// 4. Delete the isActive property
delete user.isActive;

// 5. Use Object.keys() to list all remaining fields
console.log("User Fields:", Object.keys(user));


// =======================================================
// Assignment 2: Exam Result Summary
// -------------------------------------------------------
// Scenario : Marks are stored subject-wise for a student.
//
// Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
  totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);

// 2. Calculate average marks
let subjectsCount = Object.keys(marks).length;
let averageMarks = totalMarks / subjectsCount;
console.log("Average Marks:", averageMarks);

// 3. Find the highest scoring subject
let highestScore = 0;
let highestSubject = "";

for (let subject in marks) {
  if (marks[subject] > highestScore) {
    highestScore = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, highestScore);

// 4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);


// =======================================================
// Assignment 3: Application Settings Controller
// -------------------------------------------------------
// Scenario : A web app stores user preferences as settings.
//
// Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave to true
settings.autoSave = true;

// 3. Remove the notifications setting
delete settings.notifications;

// 4. Freeze the settings object so it cannot be modified
Object.freeze(settings);

// Trying to modify after freeze (will not change)
settings.language = "fr";

console.log("Final Settings:", settings);


//done 5 tasks