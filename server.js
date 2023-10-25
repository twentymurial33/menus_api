const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("It's working!");
});

app.listen(port, () => {
  console.log("app listening on port 5000");
});
