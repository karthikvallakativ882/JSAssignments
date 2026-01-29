//Assignment 3: Age Calculator (Intermediate)

//Input:
    let dob = "2000-05-15";


//Tasks:
    //    1. Calculate exact age in years
    let dobDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    let monthDiff = today.getMonth() - dobDate.getMonth();  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    console.log("Exact age in years :", age);