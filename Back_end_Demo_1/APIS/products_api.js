import exp from "express";

export const productsApp = exp.Router();

// Temporary in-memory storage
let products = [];


// GET all products

productsApp.get("/products", (req, res) => {
    res.status(200).json({
        message: "All products",
        payload: products
    });
});


// CREATE product

productsApp.post("/products", (req, res) => {
    const product = req.body;

    // Convert productId → id
    if (!product || !product.productId) {
        return res.status(400).json({
            message: "productId is required"
        });
    }

    const newProduct = {
        id: product.productId,
        name: product.name,
        price: product.price,
        brand: product.brand
    };

    products.push(newProduct);

    res.status(201).json({
        message: "Product created",
        payload: newProduct
    });
});


// UPDATE product

productsApp.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedData = req.body;

    const index = products.findIndex(p => p && p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products[index] = { ...products[index], ...updatedData, id };

    res.status(200).json({
        message: "Product updated",
        payload: products[index]
    });
});


// GET product by ID

productsApp.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p && p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
        message: "Product",
        payload: product
    });
});


// DELETE product

productsApp.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p && p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.status(200).json({
        message: "Product deleted",
        payload: deletedProduct[0]
    });
});
