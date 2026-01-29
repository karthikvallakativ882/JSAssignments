//ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                        // If valid, create task object and add to tasks array
                        const titleValidation = validateTitle(title);
                        const priorityValidation = validatePriority(priority);
                        const dueDateValidation = validateDueDate(dueDate);

                        if (titleValidation !== "valid title") {
                            return titleValidation;
                        }
                        if (priorityValidation !== "valid priority") {
                            return priorityValidation;
                        }
                        if (dueDateValidation !== "valid due date") {
                            return dueDateValidation;
                        }
                        const task = {
                            id: tasks.length + 1,
                            title: title,   
                      // If valid, add to tasks array
                            priority: priority,
                            dueDate: new Date(dueDate),
                            completed: false

                      // Return success/error message
                        };
                        tasks.push(task);
                        return "Task added successfully";
                    }

                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                        return tasks;

                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                        const task = tasks.find(t => t.id === taskId);
                        if (task) {
                            task.completed = true;
                            return "Task marked as complete";
                        } else {
                            return "Task not found";
                        }
                    }

                  // Export functions
                    module.exports = {
                        addTask,
                        getAllTasks,
                        completeTask
                    };
                    