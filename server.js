const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "rootS",
  password: "SAVYGARG@2006",
  database: "sustainasphere", 
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err); 
    return;
  }
  console.log("Connected to MySQL database!");
});
app.post("/register", (req, res) => {
    console.log("Received request:", req.body); 
  const { firstName, lastName, email, password, contactNumber, userType } = req.body;

  const query =
    "INSERT INTO users (firstName, lastName, email, password, contactNumber, userType) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [firstName, lastName, email, password, contactNumber, userType],
    (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).send("Error saving data.");
      }
      res.status(200).send("Registration successful!");
    }
  );
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
