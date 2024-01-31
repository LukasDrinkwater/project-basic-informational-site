const express = require("express");
const path = require("path");

// make express app
const app = express();

// get port and then listen for requests
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));

// Homepage/index Route
app.get("/", (req, res) => {
  // res.send("./index");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  // res.send("./index");
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  // res.send("./index");
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// any other path goes to the 404 error page

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});
