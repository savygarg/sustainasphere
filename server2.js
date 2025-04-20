const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login Attempt - Email:", email);
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error("Error during login:", err);
      return res.status(500).json({ message: "Server error, please try again!" });
    }

    if (results.length > 0) {
      const user = results[0];
      console.log("User found:", user);

      if (!user.password.startsWith("$2b$")) {
        console.log("Comparing plaintext passwords...");
        if (password === user.password) {
          console.log("Login successful!");
          return res.status(200).json({ message: "Login successful!" });
        } else {
          console.log("Invalid password ");
          return res.status(401).json({ message: "Invalid email or password!" });
        }
      }


      console.log("Comparing hashed passwords...");
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        console.log("Login successful with hashed password!");
        return res.status(200).json({ message: "Login successful!" });
      } else {
        console.log("Invalid password ");
        return res.status(401).json({ message: "Invalid email or password!" });
      }
    } else {
      console.log("User not found ");
      return res.status(404).json({ message: "User not found! Please register first." });
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
