import exp from "express";

export const usersApp = exp.Router();

// Temporary in-memory storage
let users = [];


// GET all users

usersApp.get("/users", (req, res) => {
    res.status(200).json({
        message: "All users",
        payload: users
    });
});


// CREATE user

usersApp.post("/users", (req, res) => {
    const newUser = req.body;

    // Validation
    if (!newUser || !newUser.id) {
        return res.status(400).json({
            message: "User id is required"
        });
    }

    users.push(newUser);

    res.status(201).json({
        message: "User created",
        payload: newUser
    });
});


// UPDATE user by ID

usersApp.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const updatedData = req.body;

    const index = users.findIndex(u => u && u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users[index] = { ...users[index], ...updatedData, id };

    res.status(200).json({
        message: "User updated",
        payload: users[index]
    });
});


// GET user by ID

usersApp.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(u => u && u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        message: "User",
        payload: user
    });
});


// DELETE user by ID

usersApp.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex(u => u && u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.status(200).json({
        message: "User deleted",
        payload: deletedUser[0]
    });
});
