/*var nombre = "Alejandro"
let nombre2 = "pedro"
const apellido = "Avile"

if(nombre == nombre2){
    nombre = nombre + " " + apellido;
}else{
    nombre2 = nombre2 + "" + apellido;
}
var numero = 0
while(numero<10){
    console.log(numero)
    numero += 1;
}
for (var i = 0; i <  50; i += 2){
    console.log(i)
}
function imprimirNombr(nombre){
    console.log(nombre)
}*/

var correo = document.getElementById("email");
var mensaje = document.getElementById("mensaje")
var enviar = document.getElementById("enviar")
var foto = document.getElementById("pepe")
var cancion = document.getElementById("cancion")

enviar.addEventListener('click',(e) =>{
    e.preventDefault();
    console.log(correo.value);
    console.log(mensaje.value);
    correo.value = "";
    mensaje.value = "";
})
var estado = 0

function playMusic(){
    if(estado==0){
    cancion.play();
    estado+=1;
}else{
    cancion.pause();
    estado-=1;
}
}
foto.addEventListener('click', playMusic)
var cancion1 = document.getElementById('cancion-video');
var estado1 = 0
function playMusic1(){
    if(estado1==0){
        cancion1.play();
        estado1+=1;
    }else{
        cancion1.pause();
        estado1-=1;
    }
}
cancion1.addEventListener('click', playMusic1);
 
//Formulario

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        console.log(`Email: ${email}`);
        console.log(`Mensaje: ${mensaje}`);

    });
});

