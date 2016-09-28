var button = document.getElementById('counter');


button.onClick(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readystate === XMLHttpRequest.DONE){
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementByID('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://jgk2015.imad.hasura-app.io/counter');
};
