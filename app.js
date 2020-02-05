var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var about = require("./routes/about");
var history = require("./routes/history");
var economics = require("./routes/economics");
var politics = require("./routes/politics");
var science = require("./routes/science");
var philosophy = require("./routes/philosophy");
var port = 8080;

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/about", about);
app.use("/history", history);
app.use("/economics", economics);
app.use("/politics", politics);
app.use("/science", science);
app.use("/philosophy", philosophy);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || port, function() {
  console.log("server up");
});

module.exports = app;
