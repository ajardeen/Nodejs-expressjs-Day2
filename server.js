const express = require("express");
const server = express();
const PORT = 3000;

// function to display the name
function displayName(name) {
  return `Hello ${name}`;
}

// server routes to display the name in the browser
server.get("/", (req, res) => {
  res.send(displayName("Mohamed Ajardeen"));
});

server.get("/about", (req, res) => {
  res.send(
    "Im a student at Guvi Geek Network and im studying Full Stack Web Development"
  );
});
server.get("/contact", (req, res) => {
  res.send("Contact me at ajardeendemo@gmail.com");
});

// server listens to the port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
