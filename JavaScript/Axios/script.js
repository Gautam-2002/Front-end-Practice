// import axios from "axios";

axios
  .get("https://anime-facts-rest-api.herokuapp.com/api/v1")
  .then(function (response) {
    // console.log(response.data.data);
    let ul = document.querySelector("ul");
    for (let anime of response.data.data) {
      let li = document.createElement("li");
      li.innerHTML = `
        <img src = ${anime.anime_img} width = 50%>
        <h3>${anime.anime_name}</h3>
        `;
      ul.append(li);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
