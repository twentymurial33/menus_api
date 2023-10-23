const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("It's working!");
});

app.listen(5000, () => {
  console.log("app listening on port 5000");
});
