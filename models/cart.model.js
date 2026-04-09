
const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },

        quantity: {
          type: Number,
          default: 1,
          required: true
        },

        price: {
          type: Number,
          required: true
        }
      }
    ],

    totalPrice: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Cart", CartSchema);