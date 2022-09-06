// function step1() {
//   setTimeout(() => {
//     console.log("selecting image");
//     return 'img'
//   }, 4000);
// }
// function step2(img) {
//   setTimeout(() => {
//     console.log(`filtered Image ${img}`);
//     return 'filteredImg'
//   }, 3000);
// }
// function step3(filteredImg) {
//   setTimeout(() => {
//     console.log("adding caption");
//     return "ImgWithCaption"
//   }, 2000);
// }
// function step4(ImgWithCaption) {
//   setTimeout(() => {
//     console.log(`finalstep ${ImgWithCaption}`);
//   }, 2500);
// }

function step1(fn) {
  setTimeout(() => {
    console.log("selecting image");
    fn("img");
  }, 4000);
}
function step2(img, fn) {
  setTimeout(() => {
    console.log(`filtered Image ${img}`);
    fn("filteredImg");
  }, 3000);
}
function step3(filteredImg, fn) {
  setTimeout(() => {
    console.log("adding caption");
    fn("ImgWithCaption");
  }, 2000);
}
function step4(ImgWithCaption) {
  setTimeout(() => {
    console.log(`finalstep ${ImgWithCaption}`);
  }, 2500);
}


// var img1 = step1();
// var filteredImg = step2(img1);
// var captionImg = step3(filteredImg);
// step4(captionImg);

// step4(step3(step2(step1())));

step1(function (img) {
  step2(img, function (filteredImg) {
    step3(filteredImg, function (ImgWithCaption) {
      step4(ImgWithCaption);
    });
  });
});
