function generador(){

for(let i=0; i<20; i++){

   var x = Math.floor((Math.random()*20)+1);
   console.log(x);
    document.getElementById("divImagenes").innerHTML+=`
   <img src="img/${x}.png";" >
   `;
}
}

