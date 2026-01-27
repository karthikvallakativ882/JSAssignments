//Assignment 1: User Profile Manager

//Scenario : You are managing a logged-in user’s profile in a web application.

//Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

//Tasks:
   // 1. Read and print the user’s name and email
   console.log("User name :",user.name , "  " ,"Gmail of user: ", user.email);
   console.log(" ")

   // 2. Add a new property lastLogin: "2026-01-01"
   user.lastLogin = "2026-01-01"
   console.log(" Added a new property lastLogin: 2026-01-01",user)

   // 3. Update role from "student" to "admin"
   user.role = "Admin";
   console.log("Updated role from student to admin",user)

   // 4. Delete the isActive property
   delete user.isActive;
   console.log(" Deleted the isActive property",user)

   // 5. Use Object.keys() to list all remaining fields
   console.log(" Used Object.keys() to list all remaining fields ",Object.keys(user));
   
