const Task = require("../models/Task");
const getTasks = async (req, res) => {
    const tasks = await Task.find();

    res.json(tasks);
};

module.exports = { getTasks };