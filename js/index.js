var count = 1800000;
var pageAmount = 5000;
var content = document.getElementById("content");
var thisSite = "https://vj-duardo.github.io/AllTwitchEmotes/";
var regex = thisSite + '\\??';

var currentPage = parseInt(window.location.href.replace(new RegExp(regex,"g"), ''));
if (typeof currentPage === 'undefined' || isNaN(currentPage))
    window.location.href = thisSite + '?' + 0;

for (let i = currentPage*pageAmount; i<(currentPage*pageAmount)+pageAmount; i++){
    var img = document.createElement("img");
    img.setAttribute("title", i);
    img.src = "https://static-cdn.jtvnw.net/emoticons/v1/"+i+"/2.0";
    content.appendChild(img);
}

function next(){
    var page = parseInt(window.location.href.replace(new RegExp(regex,"g"), ''))+1;
    if (typeof page === 'undefined' || isNaN(page))
        page = 0;
    window.location.href = thisSite + '?' + page;
}