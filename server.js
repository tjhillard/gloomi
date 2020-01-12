require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/weather", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${req.query.latlng}`
    );
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
