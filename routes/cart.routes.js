const router = require("express").Router();
const { addToCart } = require("../controllers/cart.controller");

router.post("/", addToCart);

module.exports = router;