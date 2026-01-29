//Hands-On 2: Deep Copy (Isolation & Safety Use Case)


//🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

//🎯 Task:
   //   1. Create a deep copy of order
   let copiedorder = structuredClone(order);

   //   2. Modify in copied object:
   //         i. customer.address.city
     copiedorder.customer.address.city = "Delhi";

   //         ii. items[0].price
     copiedorder.items[0].price = 60000

   //         iii. Verify original object remains unchanged
   console.log("Original object :",order)
   console.log("Copied object :",copiedorder)