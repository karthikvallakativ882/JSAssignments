 // TODO: Export these validation functions
                      
     // 1. Validate task title (not empty, min 3 chars)
            function validateTitle(title) {
                        // Your code here
                        if(title.length === 0) {
                            return " titile is empty";
                        } else if (title.length < 3) {
                            return "title should be min 3 characters";
                        }
                        return "valid title";
                      }
 
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                        const validPriorities = ["low", "medium", "high"];
                        if (validPriorities.includes(priority.toLowerCase())) {
                            return "valid priority";
                        } else {
                            return "invalid priority";
                        }
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                        const today = new Date();
                        const dueDate = new Date(date);
                        if (dueDate > today) {
                            return "valid due date";
                        } else {
                            return "due date must be a future date";
                        } 
                      }
