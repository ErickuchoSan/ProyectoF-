function saludo() {
  var letras=["A","B","C","D","E","F","G","H","I","J"];
  var contenido='';

  for(var i=0; i<letras.length; i++){
      contenido += "<div id='caja'>" + letras[i] +  "</div>";

      console.log(letras[i]);
    }
    document.getElementById('contenido').innerHTML=contenido;
  }

  function hola() {
      document.getElementById('contenido').innerHTML= "<h1>Hola </h1>";
  }
