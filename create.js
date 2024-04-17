/* document.body.onload = adding

function adding() {
    const newdiv = document.createElement("div");
    const textcontent = document.createTextNode("hi i am aaron !!!!!!");
    newdiv.appendChild(textcontent)
    const current = document.getElementById("boxes")
    document.insertBefore(newdiv, current)
}


var para = document.createElement("p");
console.log(para)

para.innerText = "This is a paragraph";

document.getElementById("boxes").appendChild(para);

var newdiv = document.createElement("div")


newdiv.style.backgroundColor = "blue"
newdiv.style.width = "200px"
newdiv.style.height = "250px"
newdiv.style.borderRadius = "20px"
newdiv.style.textAlign = "center"
newdiv.style.alignContent = "center"

document.getElementById("boxes").appendChild(newdiv);

console.log(document.getElementById("name").value)

function adding(count) {
    var news = document.createElement("div")

    news.style.backgroundColor = "white"
    news.style.width = "190px"
    news.style.height = "240px"
    news.style.borderRadius = "20px"
    news.style.textAlign = "center"
    news.style.alignContent = "center"
    news.style.marginRight = "auto"
    news.style.marginLeft = "auto"
    document.getElementById("boxes").appendChild(news);
} */