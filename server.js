const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const port = 5000;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", function (req, res) {
  res.send("It's working!");
});

//endpoint to get Many
// app.get("/locations", function (res, req) {
//   res.send();
// });

// //Add server endpoint to GET a single
// app.get("/locations:id", function (req, res) {
//   res.send();
// });

app.post("/locations", async (req, res) => {
  const { name, author } = req.body;
  console.log(req.body);
  const location = await prisma.locations.create({
    data: {
      name,
      author,
    },
  });
  res.json(location);
});

app.delete("/locations/:id", async (req, res) => {
  const { id } = req.params;
  const deletedLocation = await prisma.location.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedLocation);
});

app.put("/locations/:id", async (req, res) => {
  const { name, author } = req.body;
  const { id } = req.params;
  const locationItem = await prisma.location.update({
    where: { id: Number(id) },
    data: {
      name,
      author,
    },
  });
  res.json(locationItem);
});

app.listen(port, () => {
  console.log("app listening on port 5000");
});
