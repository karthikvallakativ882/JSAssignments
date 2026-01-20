
let totalAmount = 0;

// Add amount
function addAmount(amount) {
    totalAmount += amount;
}

// Apply discount
function applyDiscount(discount) {
    totalAmount -= discount;
}

// Add GST
function applyGST(gstPercent) {
    totalAmount += totalAmount * (gstPercent / 100);
}

// 1. Add ₹500
addAmount(500);

// 2. Add ₹1200
addAmount(1200);

// 3. Apply ₹200 discount
applyDiscount(200);

// 4. Add 18% GST
applyGST(18);

// 5. Print final bill amount
console.log("Final Bill Amount: ₹", totalAmount.toFixed(2));
