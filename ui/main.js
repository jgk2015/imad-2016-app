console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerText = "New value set by js code";

var img = document.getElementById('madi');

img.onclick = function() {
    img.style.marginLeft = '100px';
    console.log('ON CLICK EVENT');
};