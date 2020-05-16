var count = 50000;
var content = document.getElementById("content");

for (let i = 0; i<count; i++){
    var img = document.createElement("img");
    img.src = "https://static-cdn.jtvnw.net/emoticons/v1/"+i+"/2.0";
    content.appendChild(img);
}