const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Connect to MySQL Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Change if needed
    password: "SHIVTAWAR@0717",       // Set your MySQL password
    database: "sustainasphere"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

// 🔹 API to Insert Event Data
app.post("/add-event", (req, res) => {
    const { title, date, location, description } = req.body;

    if (!title || !date || !location) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const sql = "INSERT INTO events (title, date, location, description) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, date, location, description], (err, result) => {
        if (err) {
            console.error("Error inserting event:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ success: true, message: "Event added successfully", eventId: result.insertId });
    });
});

// 🔹 API to Get All Events
app.get("/events", (req, res) => {
    db.query("SELECT * FROM events", (err, results) => {
        if (err) {
            console.error("Error fetching events:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(results);
    });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
