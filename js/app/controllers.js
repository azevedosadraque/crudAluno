angular.module("meuModulo")
.controller("indexController",function($scope){
	$scope.titulo = "Cadastro";
	$scope.alunos = [
		{nome: "Camila",email:"camila@mail.com",nota1:65,nota2:80,nota3:55},
		{nome: "Pedro",email:"pedro@mail.com",nota1:75,nota2:80,nota3:55},
		{nome: "Murilo",email:"murilo@mail.com",nota1:65,nota2:60,nota3:55},
		{nome: "João",email:"joao@mail.com",nota1:95,nota2:80,nota3:55},
		{nome: "Ana",email:"ana@mail.com",nota1:65,nota2:30,nota3:55}
	];

	var init = function(){
		$scope.alunos.forEach(function(aluno){
			aluno.media = media(aluno);
		});

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
        
		limpaForm();
	};
	var contar2 = 0;
	var media = function(Aluno){
		console.log(contar2++);
		var media = (parseFloat(Aluno.nota1) + parseFloat(Aluno.nota2) + parseFloat(Aluno.nota3))/3;
		return media.toFixed(2);
	};

	$scope.abreAddAluno = function(){
		$scope.editando = false;
		limpaForm();
		$('#modal1').openModal();
	};

	$scope.addAluno = function(Aluno){
		Aluno.media = media(Aluno);
		$scope.alunos.push(Aluno);
	};

	$scope.editando = false;
	var alunoEditar;

	$scope.editarAluno = function(Aluno){
		$scope.editando = true;			
		angular.copy(Aluno,$scope.Aluno);
		$('#modal1').openModal();
		alunoEditar = Aluno;
	};

	$scope.salvarAluno = function(Aluno){
		alunoEditar.nome = Aluno.nome;
		alunoEditar.email = Aluno.email;
		alunoEditar.nota1 = Aluno.nota1;
		alunoEditar.nota2 = Aluno.nota2;
		alunoEditar.nota3 = Aluno.nota3;
		alunoEditar.media = media(Aluno);
		$('#modal1').closeModal();
	};

	$scope.deletarAluno = function(Aluno){
		for(var index in $scope.alunos){
			var aux = $scope.alunos[index];
			if(Aluno === aux){
				$scope.alunos.splice(index,1);
			}
		}
	};

	var limpaForm = function(){
		$scope.Aluno = {nome: "",email:"",nota1:'',nota2:'',nota3:'',media:''};
	};

	$scope.recebeSexo = function(sexo){
		console.log(sexo);
	}

	$scope.setReligiao = function(relig){
		var e = document.getElementById("relig");
		var itemSelecionado = e.options[e.selectedIndex].text;
		console.log(itemSelecionado);
	}


	init();


})
.controller("contatoController",function($scope){
	$scope.titulo = "Lista";
	$scope.alunos = [
		{nome: "Vader",email:"vader@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"18/01/2015"},
		{nome: "Luke",email:"luke@mail.com",sexo:"Masculino",religiao:"Budismo",data:"23/12/2014"},
		{nome: "Leia",email:"leia@mail.com",sexo:"Feminino",religiao:"Deboismo",data:"30/01/2017"},
		{nome: "Han",email:"han@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"15/10/1991"},
		{nome: "Yoda",email:"yoda@mail.com",sexo:"Masculino",religiao:"Cristianismo",data:"11/11/2000"},
	];

	$scope.addAluno = function(Aluno){
		$scope.alunos.push(Aluno);
	};


})