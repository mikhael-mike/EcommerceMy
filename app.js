const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const errorController = require("./controllers/error");
const mongoServer = require("./utils/database").mongoConnect;
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRouter);
app.use("/admin", adminRouter);
app.use(shopRouter);

app.use(errorController.page404);

// mongoose.connect('', {})

app.use((req, res, next) => {
  next();
});

// davpushet pirvelad

// app.listen(3000);

// mongoServer(() => {
//     app.listen(3000);
// })

mongoose
  .connect(
    "mongodb+srv://mike:xC8uHDHK14YZczdR@cluster0.h9zv6.mongodb.net/shop?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
