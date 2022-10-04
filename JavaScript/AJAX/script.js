// https://api.cryptonator.com/api/ticker/btc-usd

// let data = '{"ticker":{"base":"BTC","target":"USD","price":"19601.23335962","volume":"15405.61317835","change":"0.57514863"},"timestamp":1664856725,"success":true,"error":""}';

// let jsonData = JSON.parse(data);
// console.log(jsonData.ticker.price);

let req = new XMLHttpRequest();
req.open("GET", "https://inshorts.deta.dev/news?category=science");
req.send();
// console.log(req);

req.onload = function(){
    // console.log(typeof(this.response));
    let parseData = JSON.parse(this.response);
    // console.log(parseData);
    let ul = document.querySelector('ul');
    for(let news of parseData.data){
        let li = document.createElement('li');
        li.innerHTML = `
        <img src = "${news.imageUrl}" width = 50% >
        <p>${news.content}</p>
        `
        ul.append(li);
    }
}
req.onerror = function(){
    // console.log(this.response);
}