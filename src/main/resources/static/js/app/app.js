angular.module("meuModulo",['ngRoute'])

.config(function($routeProvider){
	$routeProvider
	.when("/cadastro",{
		templateUrl:"./templates/cadastro.html",
		controller:"indexController"
	})
	.when("/lista",{
		templateUrl:"templates/lista.html",
		controller:"contatoController"
	});

	$routeProvider.otherwise({redirectTo:"/cadastro"});

})





.factory('lista', function($http){ 


	var alunos;




    return {
        reset : function (aluno) {
            $route.reload();
        },
        getAlunos : function () {
        	console.log(alunos);
        	console.log("chamou");
            return alunos;
        },
        removeAluno : function(indice){
        	alunos.splice(indice,1);
        }
    }      
 });