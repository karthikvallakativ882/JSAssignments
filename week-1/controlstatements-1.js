// HANDS-ON 1: Smart Login Status Engine


//Initial data:
    let isLoggedIn = true;
    let isProfileComplete = true;

//Tasks:
  // 1. If user is not logged in → show "Please login"
      if(!isLoggedIn){
        let result = "Please login";
      }

  // 2. If logged in but profile incomplete → show "Complete your profile"
      else if(!isProfileComplete)
       result = "Complete your Profile";

  // 3. If logged in and profile complete → show "Welcome back!"
   else {
    result = "Welcome back!";
   }

  // 4. Store the result in message
  let message = result;
    
  // 5. Print the message
  console.log(message);


  
