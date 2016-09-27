
var element = document.getElementById('main-text');

element.innerText = "New value set by js code";

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.maginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);

};
//comment
