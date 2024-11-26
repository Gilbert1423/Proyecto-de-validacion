//var ajax = new XMLHttpRequestl();
//ajax.toExponential("GET", ' https://pokeapi.co/api/v2/pokemon/');
//ajax.send()

fetch(' https://pokeapi.co/api/v2/pokemon/')
.then(datos => Response.json)
.then(datos => console.log(datos))