const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');
const { random7 } = require('./database/models.js');

// const arr = [];
let tsv = 'houseId\tpictures\n';

// const genRandomImages = () => {
//   for (let i = 0; i < 10000000; i++) {
//     let pictures = random7(imgLinkArr);
//     if (i === 9999999) {
//       tsv += `${i}\t${pictures}`;
//     } else {
//       tsv += `${i}\t${pictures}\n`;
//     }
//     // let pictures = random7(imgLinkArr);
//     // let tempObj = {
//     //   'houseId': i,
//     //   'pictures': pictures
//     // };
//     // arr.push(JSON.stringify(tempObj));

//   }
// };

// genRandomImages();

const CreateFiles = fs.createWriteStream('./tsv_data.tsv', {
      flags: 'a' //flags: 'a' preserved old data
})

for (let i = 0; i < 10000001; i++){
    let pictures = random7(imgLinkArr).toString();
    if (i === 0) {
      CreateFiles.write(tsv);
    } else if (i === 10000000) {
      CreateFiles.write(`${i}\t${pictures}`);
    } else {
      CreateFiles.write(`${i}\t${pictures}\n`); //'\r\n at the end of each value
    }
}
// for (let i = 0; i < 10000001; i++){
//     let pictures = random7(imgLinkArr);
//     if (i === 0) {
//       CreateFiles.write(tsv);
//     } else if (i === 10000000) {
//       CreateFiles.write(`${i}\t${pictures}`);
//     } else {
//       CreateFiles.write(`${i}\t${pictures}\n`); //'\r\n at the end of each value
//     }
// }

// fs.writeFile('./tsv_data.tsv', tsv, err => {
//   if (err) {
//     console.log('error creating tsv file');
//   }
// })
