angular.module('contatooh').controller('ContatosController', function($scope){
	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};
	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato Angular 1",
			"email": "cont1@emp.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular 2",
			"email": "cont2@emp.com.br"
		},
		{
			"_id": 3,
			"nome": "Contato Angular 3",
			"email": "cont3@emp.com.br"
		}
	];
	
	$scope.filtro = '';
});