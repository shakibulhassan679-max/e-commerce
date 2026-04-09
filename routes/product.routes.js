const router = require("express").Router();
const { auth, isAdmin } = require("../middleware/auth.middleware");
const {createProduct,getProducts,getProductById,updateProduct,deleteProduct} = require("../controllers/product.controller");

router.post("/", auth, isAdmin, createProduct);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.put("/:id", auth, isAdmin, updateProduct);

router.delete("/:id", auth, isAdmin, deleteProduct);

module.exports = router;