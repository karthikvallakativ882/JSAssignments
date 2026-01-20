// =======================================================
// ASSIGNMENT 1: Shopping Cart Summary
// =======================================================
// You are building a shopping cart summary for an e-commerce website.
//
// Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Get only in-stock products
const inStockProducts = cart.filter(item => item.inStock);

// 2. Create new array with { name, totalPrice }
const productTotals = inStockProducts.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

// 3. Calculate grand total cart value
const grandTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

// 4. Get details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");

// 5. Find position of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log(inStockProducts, productTotals, grandTotal, mouseDetails, keyboardIndex);


// =======================================================
// ASSIGNMENT 2: Student Performance Dashboard
// =======================================================
// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. Students who passed (marks ≥ 40)
const passedStudents = students.filter(s => s.marks >= 40);

// 2. Add grade field
const gradedStudents = students.map(s => ({
  ...s,
  grade:
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D"
}));

// 3. Calculate average marks
const averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// 4. Find student who scored 92
const student92 = students.find(s => s.marks === 92);

// 5. Find index of student "Kiran"
const kiranIndex = students.findIndex(s => s.name === "Kiran");

console.log(passedStudents, gradedStudents, averageMarks, student92, kiranIndex);


// =======================================================
// ASSIGNMENT 3: Employee Payroll Processor
// =======================================================
// Test Data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. Employees from IT department
const itEmployees = employees.filter(emp => emp.department === "IT");

// 2. Add netSalary with 10% bonus
const salaryWithBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.1
}));

// 3. Total salary payout
const totalPayout = employees.reduce(
  (sum, emp) => sum + emp.salary,
  0
);

// 4. Find employee with salary 30000
const emp30000 = employees.find(emp => emp.salary === 30000);

// 5. Find index of employee "Neha"
const nehaIndex = employees.findIndex(emp => emp.name === "Neha");

console.log(itEmployees, salaryWithBonus, totalPayout, emp30000, nehaIndex);


// =======================================================
// ASSIGNMENT 4: Movie Streaming Platform
// =======================================================
// Test Data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. Only Sci-Fi movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");

// 2. Format: "Title (rating)"
const movieLabels = movies.map(
  movie => `${movie.title} (${movie.rating})`
);

// 3. Average movie rating
const averageRating =
  movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;

// 4. Find movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");

// 5. Find index of "Avengers"
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");

console.log(sciFiMovies, movieLabels, averageRating, jokerMovie, avengersIndex);


// =======================================================
// ASSIGNMENT 5: Bank Transaction Analyzer
// =======================================================
// Test Data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. All credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");

// 2. Extract only amounts
const transactionAmounts = transactions.map(t => t.amount);

// 3. Final account balance
const finalBalance = transactions.reduce(
  (balance, t) =>
    t.type === "credit" ? balance + t.amount : balance - t.amount,
  0
);

// 4. First debit transaction
const firstDebit = transactions.find(t => t.type === "debit");

// 5. Find index of transaction with amount 10000
const index10000 = transactions.findIndex(t => t.amount === 10000);

console.log(
  creditTransactions,
  transactionAmounts,
  finalBalance,
  firstDebit,
  index10000
);
