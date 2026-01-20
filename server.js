const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// AI route
const aiRoutes = require("./routes/ai");
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("NagrikAI Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});