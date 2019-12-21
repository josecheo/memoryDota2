function generador(){
document.getElementById("divImagenes").innerHTML="";
matriz=[];
while(matriz.length<20){
var nrandom = Math.floor((Math.random()*20)+1);
if(matriz.includes(nrandom)) continue;
matriz.push(nrandom);
    document.getElementById("divImagenes").innerHTML+=`
   <img id="img" class="tapa" src="img/${nrandom}.png" onclick="destapar()">
   `;
 }
console.log(matriz);
}
  
function destapar(){

console.log("aqui destapa");

}







