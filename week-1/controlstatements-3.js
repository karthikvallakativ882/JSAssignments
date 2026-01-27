//HANDS-ON 3: Enrollment Eligibility Checker

//Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

//Tasks:
   //1. If both conditions are true → "Enroll Now"
   if(hasPaid == true && hasCompletedBasics == true){
    let result = "Enroll Now"
   }

//   2. Otherwise → "Complete Requirements"
    else{
        result = "Complete Requirements"
    }
  // 3. Use ternary operator
  result = (hasPaid == true && hasCompletedBasics == true) ? "Enroll Now" : "Complete Requirements"

 //  4. Store result in enrollMessage
 let enrollMessage = result;

  // 5. Print message
  console.log( enrollMessage);