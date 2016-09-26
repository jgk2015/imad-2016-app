
var element = document.getElementById('main-text');

element.innerText = "New value set by js code";

var img = document.getElementById('madi');
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.maginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    img.style.marginLeft = '100px';
    console.log('ON CLICK EVENT');
};
//comment
