//HANDS-ON 2: Course Price Tag Labeler

//Initial data:
     let price = 1299;

//Tasks:
   //1. If price < 500 → "Budget Course"
   if(price < 500){
    let label = "Budget Course"
   }

//   2. If price between 500–1000 → "Standard Course"
   if(price <= 1000)
    label = "Standard Course"

//   3. If price > 1000 → "Premium Course"
   if(price > 1000)
    label = "Premium Course"

  // 4. Store label in courseTag
  let courseTag = label;

  // 5. Print the label
    console.log(label);
