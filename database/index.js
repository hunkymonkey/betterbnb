const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://mongo/mockPic",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.log.bind(console, "Error"));
db.once(`open`, () => {
  console.log(`connected to the database`);
});

module.exports = db;
//lol this is the end
