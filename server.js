const express = require("express");
const app = express();
const port = 5000;

app.get("/", function (req, res) {
  res.send("It's working!");
});

//endpoint to get Many
app.get("/locations", function (res, req) {
  res.send();
});
//Add server endpoint to GET a single
app.get("/locations:id", function (req, res) {
  res.send();
});

//Create menthod
app.put("/locations:id", function (req, res) {});
//Update menthod
app.post("/locations:id", function (req, res) {});
//delete method
app.delete("/location:id", function (req, res) {});

app.listen(port, () => {
  console.log("app listening on port 5000");
});
