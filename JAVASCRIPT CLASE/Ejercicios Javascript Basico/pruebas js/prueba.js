
    
    var newElem = document.createElement('div');
  newElem.id = 'nuevoElemento';
  newElem.className = 'bloque';
  newElem.style = 'background:red; width:200px; height:200px';
  var body = document.querySelector('body');
  body.appendChild(newElem);