const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
const { random7 } = require('../models.js');

let tsv = 'houseId\tpictures\n';

const CreateFiles = fs.createWriteStream('./tsv_data.tsv', {
      flags: 'a' //flags: 'a' preserved old data
})

for (let i = 0; i < 1000001; i++){
    let pictures = random7(imgLinkArr).toString();
    if (i === 0) {
      CreateFiles.write(tsv);
    } else if (i === 1000000) {
      CreateFiles.write(`${i}\t${pictures}`);
    } else {
      CreateFiles.write(`${i}\t${pictures}\n`); //'\r\n at the end of each value
    }
}
