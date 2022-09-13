const btn = document.querySelector("#btn");
const input = document.querySelector("#note");
const ul = document.querySelector("#ul");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  const btn2 = document.createElement("button");
  btn2.innerText = "X";
  btn2.style.borderRadius = "50%";
  li.innerText = input.value + " ";
  ul.appendChild(li);
  li.appendChild(btn2);
  input.value = "";
  btn2.addEventListener("click", () => {
    li.remove();
  });
});
