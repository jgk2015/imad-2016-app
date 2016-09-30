var button = document.getElementById('counter');


button.onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://jgk2015.imad.hasura-app.io/counter', true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit-btn');

submit.onclick = function(){
  
  
  var names = ['name1', 'name2', 'name3', 'names4', 'names5']  ;
  var list = '';
  
  for(var i=0; i< names.length; i++){
      list += 'li' + names[1] + 'li';
  }
  var ul =document.getElmementById('nameList');
  ul.innerHTML =list;
};

