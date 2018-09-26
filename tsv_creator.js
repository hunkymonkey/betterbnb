const arr = [];
const randomImg = () => Math.floor(Math.random() * 1050) + 1;
const randomDimension = () => Math.floor(Math.random() * 801) + 200;

const genRandomImages = () => {
  for (let i = 0; i < 1000; i++) {
    let tempArr = [];
    arr.push(
      `{
        https://picsum.photos/${randomDimension()}/${randomDimension()}?image=${randomImg()}
      }`
    );
  }
};

genRandomImages();


