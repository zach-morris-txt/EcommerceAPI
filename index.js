const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path")
const userRoute = require("./server/routes/user");
const authRoute = require("./server/routes/auth");
const productRoute = require("./server/routes/product");
const cartRoute = require("./server/routes/cart");
const orderRoute = require("./server/routes/order");
const stripeRoute = require("./server/routes/stripe");
const cors = require("cors");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// if(process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")))

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//   })
// } else {
//   app.get('/', (req, res) => {
//     res.send("API running")
//   })
// }


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
