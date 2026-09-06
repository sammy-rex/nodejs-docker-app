const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello from Sammy-rex! 🚀</h1>
    <p>My Node.js application is running successfully.</p>
    <p>It will be deployed using GitHub, Docker, and Docker Hub.</p>
  `);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
