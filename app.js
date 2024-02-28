const express = require("express");
require("dotenv").config();
const connection = require("./configuration/config");
const userRouter = require("./modules/user/routes/user.routes");

const app = express();

const port = process.env.PORT;
// Middleware parsing bodies
app.use(express.json());

// Connect to database Mongoose
connection();

// Use routes
app.use(userRouter);

// Default route
app.get("/", (req, res) => res.send("Hello World!"));

// Start server
app.listen(port, () => console.log(`App listening on port ${port}!`));
