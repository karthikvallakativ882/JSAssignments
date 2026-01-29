//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)


// Given:
      let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
 // 1.Check if:
 let today = new Date();
 //     * Today is before deadline → "Enrollment Open"
 if(today <= enrollmentDeadline) console.log("Enrollment Open")

 //     * Today is after deadline → "Enrollment Closed"
 else{
    console.log("Enrollment Closed ")
 }

 // 2. Validate user input date:
 //     * Input: "2026-02-30"
   let inputdate = new Date(2026,02,30); //Month is 0-indexed
   console.log("input date :",inputdate);

 //     * Detect whether the date is valid or invalid
 if(inputdate.getDate() !== 30)
    console.log("Invalid Date");
 else
    console.log("Valid Date");
   