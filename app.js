

function generador() {
  document.getElementById("divImagenes").innerHTML = "";
  matriz = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10'];
  valorImagen = [];
  idImagen = []
  cartasAdivinadas = 0;
  var i = matriz.length;
  var indiceAleatorio;
  var valorTemporal;
  while (--i > 0) {
    indiceAleatorio = Math.floor(Math.random() * (i + 1));
    valorTemporal = matriz[indiceAleatorio];
    matriz[indiceAleatorio] = matriz[i];
    matriz[i] = valorTemporal;
  };
  for (let i = 0; i < 20; i++) {
    document.getElementById("divImagenes").innerHTML += `
   <img id="img${i}" class="tapado" src="img/${matriz[i]}.png" onclick="destapar(${matriz[i]},${i})">`;

  }

};


function destapar(numeroRandom, valor) {
 


  if (idImagen.length < 2) {
        
   
    if (idImagen.length === 0) {
      document.getElementById("img" + valor).className = "destapado";
      valorImagen.push(numeroRandom);
      idImagen.push(valor);

      console.log("Primera Carta" + " " + idImagen);

    } else if (idImagen.length === 1 && idImagen[0]!=valor) {
      document.getElementById("img" + valor).className = "destapado";
      valorImagen.push(numeroRandom);
      idImagen.push(valor);
      console.log("segunda Carta" + " " + idImagen);

      if (valorImagen[0] === valorImagen[1]) {
        cartasAdivinadas += 2;
        valorImagen = []
        idImagen = []
        console.log(cartasAdivinadas);

        if (cartasAdivinadas == matriz.length) {
          alert("GANASTE !!! ... Creando nuevo tablero");
          generador();
        }
      } else {
        function ocultarImagenes() {

          document.getElementById("img" + idImagen[0]).className = "tapado";
          document.getElementById("img" + idImagen[1]).className = "tapado";
         
          valorImagen = [];
          idImagen = [];
        }
        setTimeout(ocultarImagenes, 500);


      }
    }
  }
}