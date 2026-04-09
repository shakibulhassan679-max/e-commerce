const Cart = require("../models/cart.model");

const addToCart = async (req, res) => {
  try {

    const { user, product, quantity, price } = req.body;

    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = await Cart.create({
        user,
        products: [{ product, quantity, price }]
      });
    } else {
      cart.products.push({ product, quantity, price });
      await cart.save();
    }

    res.json(cart);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addToCart };