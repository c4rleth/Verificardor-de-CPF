/*
var valido = verificaCPF("11144477733");
console.log(valido);
*/

var bv = document.getElementById("btn_verificar");
bv.addEventListener("click",func);
console.log(bv);

function func() {
	//referencia no input
	var cpfin = document.getElementById("CPF");
	//valor do CPF digitado
	var cpf = (cpfin.value);
	alert( verificaCPF(cpf) );
}

//verifica se o cpf é valido, e retorna 'true' se for;
function verificaCPF(cpf) {
	var dv1 = calculaDV1(cpf);
	var dv2 = calculaDV2(cpf);
	console.log(dv1, dv2);
	if(dv1 == cpf[9] && dv2 == cpf[10]) {
		return true;

	}else{
		return false;
	}	

}
function calculaDV1(cpf) {
	var pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2];
	var soma = 0;
	for(var i = 0; i < 9; i++) {
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}	
	
}
function calculaDV2(cpf) {
	var pesos = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
	var soma = 0;
	for(var i = 0; i < 10; i++) {
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
}

}		
