const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const TimeLog = require("./models/TimeLog");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/trackerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ DB Error:", err));

app.use(cors());
app.use(express.json());

// Save log
app.post("/log", async (req, res) => {
  try {
    const log = new TimeLog(req.body);
    await log.save();
    res.status(201).json({ message: "Log saved" });
  } catch (err) {
    res.status(500).json({ error: "Error saving log" });
  }
});

// Serve dashboard
app.get("/logs", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

// API for dashboard
app.get("/api/logs", async (req, res) => {
  try {
    const logs = await TimeLog.find().sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch logs" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
