const fs = require("fs");
const imgLinkArr = require('../helper/img_link_data.js');

const limit = 10000001;
const CreateFile = fs.createWriteStream("./sql_data.csv");

const randomIndexOf = arr => Math.floor(Math.random() * arr.length);
const random = arr => {
  return arr[randomIndexOf(arr)]
};

let picture = random(imgLinkArr);

for (let i = 0; i < limit; i++) {
  if (i % 1000000 === 0) {
    console.log(i);
  }
  const docs =
    i +
    "," +
    picture +
    "," +
    picture +
    "," +
    picture +
    "," +
    picture +
    "," +
    picture +
    "," +
    picture +
    "," +
    picture +
    "\n";

  CreateFile.write(docs);
}
//node --max-old-space-size=6000 csv_generator.js

// CREATE TABLE displaydatas (
//   item_id INT NOT NULL,
//   image VARCHAR(80) NOT NULL,
//   image2 VARCHAR(80) NOT NULL,
//   image3 VARCHAR(80) NOT NULL,
//   image4 VARCHAR(80) NOT NULL,
//   image5 VARCHAR(80) NOT NULL,
//   image6 VARCHAR(80) NOT NULL,
//   image7 VARCHAR(80) NOT NULL,
//   PRIMARY KEY (item_id)
// );

// mysql -u root -p --local-infile=1 bbnb
//LOAD DATA LOCAL INFILE '/Users/userlee8742/Desktop/betterbnb-Danyo/database/helpersql/sql_data.csv' INTO TABLE houses FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';