console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "New value set by js code";

var img = document.getElementById('madi');

img.onclick = function() {
    img.style.margin-left = '100px';
};