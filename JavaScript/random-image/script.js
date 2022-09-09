const arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
let img = document.querySelector("#image");
let ele = 0;
setInterval(() => {
  img.setAttribute("src", arr[ele]);
  ele = (ele + 1) % arr.length;
  console.log(ele);
}, 1000);
