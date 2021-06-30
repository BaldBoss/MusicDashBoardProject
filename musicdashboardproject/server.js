var Artist = require("./musicData/Artist")
const express = require("express");
var cors = require('cors')
var TheLoaiNhac = require('./musicData/TheLoaiNhac')


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors()) 
app.get("/api/Artist", (req, res) => {
    res.json(Artist);
});
app.get("/api/TheLoaiNhac", (req, res) => {
    res.json(TheLoaiNhac);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});