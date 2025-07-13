const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  setTimeout(() => {
    res.json({ status: "ok" });
  }, 30000); // 30 sec delay
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
