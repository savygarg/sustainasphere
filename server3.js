const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SHIVTAWAR@0717",
  database: "sustainasphere",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

app.post("/contact", (req, res) => {
  const { name, email, company, position, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, Email, and Message are required!" });
  }

  const query = "INSERT INTO contact_messages (name, email, company, position, message) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [name, email, company, position, message], (err, result) => {
    if (err) {
      console.error("Error saving message:", err);
      return res.status(500).json({ message: "Server error. Try again!" });
    }
    res.status(200).json({ message: "Message sent successfully!" });
  });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
