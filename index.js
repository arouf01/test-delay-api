const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors()); // <-- Call the cors() function

app.get("/", (req, res) => {
  setTimeout(() => {
    res.json({ status: "ok" });
  }, 30000); // 1-min delay
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
