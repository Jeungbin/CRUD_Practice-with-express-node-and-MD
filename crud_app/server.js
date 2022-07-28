const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny")); // * shoudl chek what is this

app.get("/", (req, res) => {
  res.send("crud");
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
