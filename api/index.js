const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")



dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DBConnection Sufccessful")
}).catch((err) => {console.log(err)});

app.use(cors())

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 4000, () => {
    console.log("Backend")
})