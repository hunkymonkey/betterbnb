const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
const { random7 } = require('../models.js');

let csv = 'houseId,pictures\n';

const CreateFiles = fs.createWriteStream('./csv_data.csv', {
  flags: 'a' //flags: 'a' preserved old data
})

for (let i = 0; i < 1001; i++) {
  let pictures = random7(imgLinkArr).toString();
  if (i === 0) {
    CreateFiles.write(csv);
  } else if (i === 1000) {
    CreateFiles.write(`${i},[${pictures}]`);
  } else {
    CreateFiles.write(`${i},[${pictures}]\n`); //'\r\n at the end of each value
  }
}
