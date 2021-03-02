const express = require("express");

const app = express();

const { PORT = 3000 } = process.env;

// Services
const { getImageById, getUserById } = require("../services");

/** 
 * GET /users/1 200 OK
 * { userId: "1", name: "John Doe", images: [url, url] }
*/
app.get("/user/:id", (req, res) => {
  res.send('@todo');
});

app.listen(PORT, () => {
  console.log(`App runing in port: ${PORT}`);
});
