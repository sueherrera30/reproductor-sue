var chopin = document.getElementById("chopincito");

function reproducir() {
    chopin.play();
    chopin.volume = 0.5;
}
function pausar() {
    chopin.pause();
}
function parar(){
  chopin.load();
}

function subirVolumen(){
  // if( ??? <= 1.0 ){
 chopin.volume = chopin.volume + 0.1;
 }
//  else{
//    alert("tienes el 100% de volumen");
//  }
// }

function bajarVolumen(){
  // if( ???>= 0.0 ){
  chopin.volume = chopin.volume - 0.1;
 }
//  else{
//    alert("eliminaste todo el volumen");
//  }
// }
function retroceder(){
  chopin.currentTime -= 1;
}
function avanzar(){
  chopin.currentTime += 1;
}

function barra(){
  var barra = document.getElementById('barrita');
  barra.value = chopin;

}
   chopin.ontimeupdate = function(){
  document.getElementById('duracion');
  duracion.value = chopin.currentTime;
  console.log(duracion.value);
}
