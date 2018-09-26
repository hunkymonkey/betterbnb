const fs = require('fs');

const arr = [];
const randomImg = () => Math.floor(Math.random() * 1050) + 1;
const randomDimension = () => Math.floor(Math.random() * 801) + 200;

const genRandomImages = () => {
  for (let i = 0; i < 1000; i++) {
    arr.push(
      JSON.stringify(`https://picsum.photos/${randomDimension()}/${randomDimension()}?image=${randomImg()}`)
    );
  }
};

genRandomImages();

fs.writeFile('img_link_data.js', arr, err => {
  if (err) {
    console.log('error generating array of image links');
  }
});
