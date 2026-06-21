const express = require("express");
const Task = require("../models/Task");
const { getTasks } = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);
router.post("/", async (req, res) => {
  try{
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err){
    res.status(500).json({
      message: err.message
    });
  }
   // console.log(req.body);
});

module.exports = router;