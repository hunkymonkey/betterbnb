const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
const { random7 } = require('../models.js');

const arr = [];

const genRandomImages = () => {
  for (let i = 0; i < 10000000; i++) {
    let pictures = random7(imgLinkArr);
    let tempObj = {
      'houseId': i,
      'pictures': pictures
    };
    arr.push(JSON.stringify(tempObj));
  }
};

genRandomImages();

const CreateFiles = fs.createWriteStream('./tsv_data.tsv', {
  flags: 'a' //flags: 'a' preserved old data
})

fs.writeFile('./json_data.json', arr, err => {
  if (err) {
    console.log('error creating json file');
  }
})
