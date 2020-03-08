const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({});
});
app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Post created", authData });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock user
  const user = { id: 1, username: "user", email: "user@mail.com" };

  jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    res.json({ token });
  });
});

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

//Verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log("server started on port 5000"));
