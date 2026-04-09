 const router = require("express").Router();
const { auth, isAdmin } = require("../middleware/auth.middleware");

const {createOrder,getOrders,getSingleOrder,updateOrderStatus,deleteOrder,} = require("../controllers/order.controller");

router.post("/", auth, createOrder);

router.get("/", auth, isAdmin, getOrders);

router.get("/:id", auth, getSingleOrder);

router.put("/:id", auth, isAdmin, updateOrderStatus);

router.delete("/:id", auth, isAdmin, deleteOrder);

module.exports = router;