const arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let check = true;
let img = document.querySelector("#image");
let ele = 0;
function play() {
  setInterval(() => {
    if (check == false) {
      return;
    }
    img.setAttribute("src", arr[ele]);
    ele = (ele + 1) % arr.length;
    // console.log(ele);
  }, 1500);
}

window.addEventListener("load", play);
function playpause(e) {
  const key = e.keyCode;
  if (key == 32 && check == true) {
    // console.log(key);
    check = false;
  } else {
    check = true;
  }
}
window.addEventListener("keydown", playpause);
//32
