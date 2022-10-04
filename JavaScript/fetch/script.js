fetch("https://inshorts.deta.dev/news?category=science")
.then(function(res){
    return res.json();
})
.then(function(d) {
    // console.log(d);
    let ul = document.querySelector("ul");
    for (let news of d.data) {
      let li = document.createElement("li");
      li.innerHTML = `
        <img src = "${news.imageUrl}" width = 50% >
        <p>${news.content}</p>
        `;
      ul.append(li);
    }
})
.catch()