// let URLs = `https://i.postimg.cc/76Fqkn0n/154922_168_IMG_01_0000_max_476x317.jpg
// https://i.postimg.cc/VvXmL0FQ/178541-_Incredible-_Shower.jpg
// https://i.postimg.cc/L4PHVGFC/178543-_Simple-_Classic-_House-_Style.jpg
// https://i.postimg.cc/yN5HmyQC/20180322_wooden_house_zm0159252.jpg
// https://i.postimg.cc/pLsxTHKT/20180322_wooden_house_zm0159252_1.jpg
// https://i.postimg.cc/ZKhJsjTT/7u9a1396.jpg
// https://i.postimg.cc/qR3dj6Sh/architecture-3076685_1920.jpg
// https://i.postimg.cc/nc98Ym8v/casa-maguey-intersticial-arquitectura-architecture-house-white-m.jpg
// https://i.postimg.cc/mgLBBDzJ/for_home_-_1375_dean_street_-_credit-_travis_mark.jpg
// https://i.postimg.cc/L6B2cfXj/HS_05.jpg
// https://i.postimg.cc/DZpD1vBj/it-is-a-garden-house-megumi-matsubara-hiroi-ariyama-architecture.jpg
// https://i.postimg.cc/k5DCRpyy/key-hole-house-1.jpg
// https://i.postimg.cc/4N5RLgL5/konieczny-ark-robert-konieczny-architecture-residential-krakow-p.jpg
// https://i.postimg.cc/kX00j59L/konieczny-ark-robert-konieczny-architecture-residential-krakow-p.jpg
// https://i.postimg.cc/L5FF76Fy/mush5jpg-b4c2e7ad13addd9f.jpg
// https://i.postimg.cc/MTpNcMbf/riba-house-of-the-year-architecture-news-awards_dezeen_2364_comm.jpg
// https://i.postimg.cc/wTHdQvVM/thatch1jpg-9829e405f9fd224f.jpg
// https://i.postimg.cc/PJbnkstd/thatch2jpg-007326ff10fe228e.jpg
// https://i.postimg.cc/wxDpNJDn/thatchjpg-36a53d8f5814f965.jpg
// https://i.postimg.cc/6pCDFNpq/top-10-houses-2017_dezeen_2364_ss_0-852x609.jpg
// https://i.postimg.cc/xdYW2FXR/top-10-houses-2017_dezeen_2364_ss_1-852x608.jpg
// https://i.postimg.cc/435jNbtT/top-10-houses-2017_dezeen_2364_ss_3-852x608.jpg
// https://i.postimg.cc/3NyqBsqK/top-10-houses-2017_dezeen_2364_ss_4-852x609.jpg
// https://i.postimg.cc/mk056dx7/top-10-houses-2017_dezeen_2364_ss_5-852x608.jpg
// https://i.postimg.cc/y65tdNJW/top-10-houses-2017_dezeen_2364_ss_7-852x609.jpg
// https://i.postimg.cc/4xR06FQg/top-10-houses-2017_dezeen_2364_ss_8-852x608.jpg
// https://i.postimg.cc/5NCGFMvg/top-10-houses-2017_dezeen_2364_ss_9-852x609.jpg`;

const URLs = [];
const randomImg = () => Math.floor(Math.random() * 1050) + 1;
const randomDimension = () => Math.floor(Math.random() * 801) + 200;

const genRandomImages = () => {
  for (let i = 0; i < 1000; i++) {
    URLs.push(`https://picsum.photos/${randomDimension()}/${randomDimension()}?image=${randomImg()}`);
  }
}
genRandomImages();

let singleLinks = URLs;
console.log(singleLinks);

module.exports = singleLinks;
