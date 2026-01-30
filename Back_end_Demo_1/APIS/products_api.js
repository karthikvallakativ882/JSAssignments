import exp from 'express'
export const productsApp = exp.Router()

        let products = []

        productsApp.get("/products",(req, res)=>{
            res.status(200).json({message:"Products:",payload:products})
        })

       productsApp.post("/products",(req, res)=>{
            let product = req.body;
            products.push(product);
            res.status(200).json({message: "Product Created !"})

        })