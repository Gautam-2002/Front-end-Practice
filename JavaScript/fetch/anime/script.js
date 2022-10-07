fetch("https://anime-facts-rest-api.herokuapp.com/api/v1")
.then(function (res) {
    return res.json();
})
.then(function (d) {
    console.log(d);
    let ul = document.querySelector("ul");
    for(let anime of d.data){
        let li = document.createElement("li");
        li.innerHTML = `
        <img src = ${anime.anime_img} width = 50%>
        <h3>${anime.anime_name}</h3>
        `;
        ul.append(li);
    }
})
.catch()