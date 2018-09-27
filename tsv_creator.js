const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
const { random7 } = require('./database/models.js');

const arr = [];

const genRandomImages = () => {
  for (let i = 0; i < 100000; i++) {
    let pictures = random7(imgLinkArr);
    let tempObj = {
      'houseId': i,
      'pictures': pictures
    };
    arr.push(JSON.stringify(tempObj));
  }
};

genRandomImages();

fs.writeFile('json_data.json', arr, err => {
  if (err) {
    console.log('error writing to json_data');
  }
});

