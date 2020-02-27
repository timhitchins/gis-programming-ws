const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "gis_programming_workshop")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/gis_programming_workshop/index.html"));
});

app.listen(8080, () => console.log("Listening on port 8080..."));
