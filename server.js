const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/weather", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.darksky.net/forecast/edd1946cf14e6dacd8393c0187102bd4/${req.query.latlng}`
    );
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
