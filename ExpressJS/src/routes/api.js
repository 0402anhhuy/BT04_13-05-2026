const express = require("express");
const {
    createUser,
    handleLogin,
    getUser,
    getAccount,
} = require("../controllers/userController");
const {
    getAllProducts,
    getProductById,
    createProduct,
    getProductsByCategory,
} = require("../controllers/productController");
const auth = require("../middleware/auth");
const delay = require("../middleware/delay");

const routerAPI = express.Router();

routerAPI.all("*path", auth);

routerAPI.get("/", (req, res) => {
    return res.status(200).json("Hello world api");
});

// User routes
routerAPI.post("/register", createUser);
routerAPI.post("/login", handleLogin);

routerAPI.get("/user", getUser);
routerAPI.get("/account", delay, getAccount);

// Product routes
routerAPI.get("/products", getAllProducts);
routerAPI.get("/products/:id", getProductById);
routerAPI.post("/products", createProduct);
routerAPI.get("/products/category/:category", getProductsByCategory);

module.exports = routerAPI;
