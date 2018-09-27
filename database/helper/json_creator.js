const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
// const { random7 } = require('../models.js');

// const arr = [];

// const genRandomImages = () => {
//   for (let i = 0; i < 1000000; i++) {
//     let pictures = random7(imgLinkArr);
//     let tempObj = {
//       'houseId': i,
//       'pictures': pictures
//     };
//     arr.push(JSON.stringify(tempObj));
//   }
// };

// genRandomImages();

// const CreateFiles = fs.createWriteStream('./json_data.json', {
//   flags: 'a' //flags: 'a' preserved old data
// })

// fs.writeFile('./json_data.json', arr, err => {
//   if (err) {
//     console.log('error creating json file');
//   }
// })
const randomIndexOf = arr => Math.floor(Math.random() * arr.length);

const random7 = arr => {
  let output = [];
  for (let i = 0; i < 7; i++) {
    output.push(arr[randomIndexOf(arr)]);
  }
  return output;
};

const CreateFiles = fs.createWriteStream("./json_data.json", {
  flags: "a" //flags: 'a' preserved old data
});

for (let i = 0; i < 10000001; i++) {
  if (i % 1000000 === 0) {
    console.log(i);
  }
  let pictures = random7(imgLinkArr);
  let tempObj = {
    'houseId': i,
    'pictures': pictures
  };
  let tempObjStr = JSON.stringify(tempObj);
  CreateFiles.write(tempObjStr);
}
