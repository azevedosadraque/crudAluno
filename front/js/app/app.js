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

.factory('lista', function(){  

	alunos = [
	{nome: "Vader",email:"vader@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"18/01/2015"},
	{nome: "Luke",email:"luke@mail.com",sexo:"Masculino",religiao:"Budismo",data:"23/12/2014"},
	{nome: "Leia",email:"leia@mail.com",sexo:"Feminino",religiao:"Deboismo",data:"30/01/2017"},
	{nome: "Han",email:"han@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"15/10/1991"},
	{nome: "Yoda",email:"yoda@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"11/11/2000"}
    ];
    return {
        addAluno : function (aluno) {
            alunos.push(aluno);
        },
        getAlunos : function () {
            return alunos;
        },
        removeAluno : function(indice){
        	alunos.splice(indice,1);
        }
    }    
 });