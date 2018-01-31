/*var x=2;
console.log('x');
console.log(x+3);
var coleçao = [''];


var cachorro = {
	raca: 'buldog',
	cor: 'branca',
	idade:7,
	amigos: ['eu','mainha']
};

console.log(cachorro.cor);
console.log(cachorro.amigos[1]);
*/

/*
function function_name(argument){
  body...
}

*/

/*
function apresentacao(nome){
   console.log('Meu nome é' + nome);
}
apresentacao(true);
*/

/*
function fatorial (num){
   if (num>0) 
   {
      return num*fatorial(num-1)
   }else

   {
   	return 1
   }
}
console.log(fatorial(4));
*/


/*
var carros = new Array('mcqueen','morthy')
for(var i=0; i=carros.lenght; i++){                                        //Duvida:Não tá funcionando
	console.log(carros[i])
}
*/


//document getElementsbyId('')
/*var a = document.getElementsByclassName('titulo'); //Funçao pra pegar o elemento
console.log(a);

var b = document.getElementsbyId('p1')//Funcao pra pegar o elemento
*/

/*
function mudarTitulo() {
	var a = document.getElementsByClassName('titulo');
	a[0].innerHTML = "oi";
}

mudarTitulo();


function alterarStyle() {
	var b = document.getElementsByClassName('titulo');
	b[0].style.color = 'blue';
}
//alterarStyle();
*/

/*
function mudarTitulo(){
	var a = document.getElementById('titulo');                     

	if (a == 'Arquitetura') {
		a.innerHTML = 'Arquitetura Basica';                                    //Duvida:Não tá funcionando
	}else{
		a.innerHTML = 'Arquitetura'
	}
}


*/

function mudaBack() {
	var a = document.getElementById('cor').value;
	console.log(a);

	document.getElementById('cor').style.background = a;
}