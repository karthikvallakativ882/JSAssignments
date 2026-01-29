//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)

//🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

//🎯 Task
   // 1. Create a shallow copy of user
   let copiedUser = {...user}

   // 2. Change:
     //     i. name in the copied object
       copiedUser.name = "karthik"

     //     ii. preferences.theme in the copied object
     copiedUser.preferences.theme = "white"

     //     iii .Log both original and copied objects
     console.log("orginal user :",user);
     console.log("Copied user :",  copiedUser);
     
     //     iv. Observe what changes and what doesn’t
     /**
      * Here I observed that the name is changed in copied object but not effected the original object but,
      * when i do changed in the nested objects of the Copied user it also effected the original user this is because
      * both the objects are taking the reference of the nested objects instead of copying the data
      */