// iii. app.js - Main application

                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  
import { addTask, getAllTasks, completeTask } from "./task.js";

                  // Test your module system
                  // 1. Add some tasks
                    console.log(addTask("Buy groceries", "medium", "2024-12-01")); // valid
                    console.log(addTask("Do", "high", "2024-11-01")); // invalid title
                    console.log(addTask("Clean house", "urgent", "2024-10-01")); // invalid priority
                    console.log(addTask("Pay bills", "low", "2023-01-01")); // invalid due date

                  // 2. Display all tasks
                    console.log(getAllTasks());

                  // 3. Complete a task
                    console.log(completeTask(1)); // assuming task with id 1 exists

                  // 4. Display all tasks again
                    console.log(getAllTasks());

