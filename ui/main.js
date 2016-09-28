var button = document.getElementById('counter');
var counter = 0;
button.onClick(){
    
    
    counter = counter + 1;
    var span = document.getElementByID('count');
    span.innerHTML = counter.toString();
};
