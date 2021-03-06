// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const compression = require("compression");
// const apiRoutes = require("./routes/api.js");

// const PORT = process.env.PORT || 3000;

// const app = express();

// app.use(logger("dev"));

// app.use(compression());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/Hawa-budget-tracker',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

// // routes
// app.use(apiRoutes);

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const apiRoutes = require("./routes/api.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/Hawa-budget-tracker";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});