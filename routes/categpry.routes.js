 const router = require("express").Router();
const { auth, isAdmin } = require("../middleware/auth.middleware");

const {createCategory,getCategories,getCategoryById,updateCategory,deleteCategory} = require("../controllers/category.controller");

router.post("/", auth, isAdmin, createCategory);

router.get("/", getCategories);

router.get("/:id", getCategoryById)

router.put("/:id", auth, isAdmin, updateCategory);

router.delete("/:id", auth, isAdmin, deleteCategory);

module.exports = router;