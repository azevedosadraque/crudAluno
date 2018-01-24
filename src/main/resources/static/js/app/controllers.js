angular.module("meuModulo")
.controller("indexController",function($scope,lista){
	$scope.titulo = "Cadastro";
	

	var init = function(){

	  	$(document).ready(function() {
	    	$('select').material_select();
	 	});

	 	$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 15, // Creates a dropdown of 15 years to control year,
			today: 'Today',
			clear: 'Clear',
			close: 'Ok',
			closeOnSelect: false // Close upon selecting a date,
		});
	};

	init();

	$scope.modeLimp;
	var auxAluno;
	var auxSexo;
	var auxReligiao;
	var contar2 = 0;

	$scope.saveAluno = function(Aluno){
		auxAluno = Aluno;
		auxAluno.religiao = auxReligiao; 
		lista.addAluno(auxAluno);
	};

	$scope.limpForm = function(){
		$scope.Aluno.data = null;
	    delete $scope.Aluno;
	};



	$scope.editando = false;
	var alunoEditar;



	$scope.setReligiao = function(relig){
		var e = document.getElementById("relig");
		var itemSelecionado = e.options[e.selectedIndex].text;
		auxReligiao = itemSelecionado;
		console.log(auxReligiao);
		console.log(e.selectedIndex);
	}



})
.controller("contatoController",function($scope,lista,$http){
	$scope.titulo = "Lista";

	$scope.carregarLista = function(){
		$scope.alunos;
		$http({	method: 'GET',url: 'http://localhost:8080/cadastro'})
		.then(function (response) {
				$scope.alunos = response.data;
		}, function(response) {
				console.log("Falha ao buscar dados no Banco")
		});

		$scope.listarAluno = function(){
			return $scope.alunos;
			console.log($scope.alunos);
		};
	}

	$scope.carregarLista()
	

	$scope.deletarAluno = function(Aluno){
		for(var index in alunos){
			var aux = alunos[index];
			console.log(index);
			if(Aluno === aux){
				console.log("aqui");
				lista.removeAluno(index);
			}
		}
	};


})