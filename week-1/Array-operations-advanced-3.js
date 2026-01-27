//ASSIGNMENT 3:

//Employee Payroll Processor

//You are building a salary processing module in a company HR app.

//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
   // 1. filter() employees from IT department
   let res1 = employees.filter(ele => ele.department == "IT");
   console.log(res1);

   // 2. map() to add:
   //         netSalary = salary + 10% bonus
   let res2 = employees.map(ele => {
    let netSalary = ele.salary + 0.1 * ele.salary;
    return {
        ...ele,
        netSalary
    };
});
   console.log(res2);

   // 3. reduce() to calculate total salary payout
   let res3 = employees.reduce((acc, ele) => acc + ele.salary,0);
   console.log("Calculated total salary payout :",res3);

   // 4. find() employee with salary 30000
   let res4 = employees.find(ele => ele.salary == 30000);
   console.log(res4);

   // 5. findIndex() of employee "Neha"
   let res5 = employees.findIndex(ele => ele.name == "Neha");
   console.log(res5);
