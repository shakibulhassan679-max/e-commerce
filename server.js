const express = require('express');
const app = express();
const connectDB = require('./config/db');
const users = require('./routes/user.routes');
const categoryRoutes = require('./routes/categpry.routes');
const cartRoutes = require('./routes/cart.routes');
const productRoutes = require('./routes/product.routes');
const orderRoutes = require('./routes/oder.routes');

const PORT = process.env.PORT;

app.use(express.json());

connectDB();

app.use('/api', users);

app.use('/api/categories', categoryRoutes);

app.use('/api/products', productRoutes);

 app.use("/api/orders", orderRoutes);

app.use('/api/cart', cartRoutes);


app.get('/', (req,res) => {
    console.log("this is my home");
    res.send("lets make history");
})

app.listen(PORT, () => {
    console.log("server is runing")
})