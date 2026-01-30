import exp from "express";
import { usersApp } from "./APIS/user_api.js";
import { productsApp } from "./APIS/products_api.js";

const app = exp();

// Middleware to parse JSON body
app.use(exp.json());

// Route forwarding
app.use("/user-api", usersApp);
app.use("/products-api", productsApp);

// Invalid path handler
app.use((req, res) => {
    res.status(404).json({ message: "Invalid path" });
});

// Global error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Server Error",
        error: err.message
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
