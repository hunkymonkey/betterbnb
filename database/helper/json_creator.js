const fs = require('fs');
const imgLinkArr = require('./img_link_data.js');

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

let i = 10000000;
write();
function write() {
  let ok = true;
  do {
    i--;
    if (i % 1000000 === 0) {
      console.log(i);
    }
    let pictures = random7(imgLinkArr);
    let tempObj = {
      'houseId': i,
      'pictures': pictures
    };
    let tempObjStr = JSON.stringify(tempObj);
    if (i === 0) {
      CreateFiles.write(tempObjStr, "utf-8", success => {
        console.log("success writing with json creator");
      });
    } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
      ok = CreateFiles.write(tempObjStr, "utf-8");
    }
  } while (i > 0 && ok);
  if (i > 0) {
    // had to stop early!
    // write some more once it drains
    CreateFiles.once("drain", write);
  }
}