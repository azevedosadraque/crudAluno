angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/cadastro",{
		templateUrl:"templates/cadastro.html",
		controller:"indexController"
	})
	.when("/lista",{
		templateUrl:"templates/lista.html",
		controller:"contatoController"
	});

	$routeProvider.otherwise({redirectTo:"/cadastro"});

})