const mongoose = require("mongoose");

// connect to MongoDB
// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const connection = () => {
  return mongoose
    .connect("mongodb://localhost:27017/my_database", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => console.log("D.B connected "))
    .catch((error) => console.log(error));
};

// mongodb:// is the protocol used to connect to MongoDB.
// localhost:27017 is the default MongoDB server address (localhost refers to the local machine, and 27017 is the default MongoDB port).
// /my_database is the name of the database you want to connect to. If the database doesn't exist, MongoDB will create it when you first write data to it.

// useNewUrlParser: true is used to parse the connection string using the MongoDB Node.js driver's new URL parser (this is required to avoid deprecation warnings).
// useUnifiedTopology: true is used to enable the new unified topology engine in the MongoDB Node.js driver (this is also required to avoid deprecation warnings).

module.exports = connection;
