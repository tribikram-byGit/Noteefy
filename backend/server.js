const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");
const dotenv = require("dotenv");
const Task = require("./models/Task.js");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/", async (req,res)=>{
  res.send("Backend Running")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});