 
const express = require("express");
const { getproducts, getSingleproducts } = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getproducts);
router.route("/products/:id").get(getSingleproducts);

module.exports = router; // Ensure this line exists
