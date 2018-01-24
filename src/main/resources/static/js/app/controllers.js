angular.module("meuModulo")
.controller("indexController",function($scope,lista,$http){
	$scope.titulo = "Cadastro";
	$scope.alunos=[];
	$scope.Aluno={};
	

	var init = function(){

	  	$(document).ready(function() {
	    	$('select').material_select();
	 	});

	 	$('.datepicker').pickadate({
			selectMonths: true,
			selectYears: 50,
			// Título dos botões de navegação
			labelMonthNext: 'Próximo Mês',
			labelMonthPrev: 'Mês Anterior',
			// Título dos seletores de mês e ano
			labelMonthSelect: 'Selecione o Mês',
			labelYearSelect: 'Selecione o Ano',
			// Meses e dias da semana
			monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
			monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
			weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
			weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
			// Letras da semana
			weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
			//Botões
			today: 'Hoje',
			clear: 'Limpar',
			close: 'Fechar',
			// Formato da data que aparece no input
			format: 'dd/mm/yyyy',
			onClose: function() {
			$(document.activeElement).blur()
			}
		
		});
	};

	init();

	$scope.modeLimp;
	var auxAluno;
	var auxSexo;
	var auxReligiao;
	var contar2 = 0;

	$scope.saveAluno = function(){

		console.log($scope.Aluno);

		var aluno = $scope.Aluno;

		var aux = aluno.data.toString() + ".";

		var dd = aux.slice(0, -8);
		var mm = aux.slice(3, -5);
		var yyyy = aux.slice(6, -1);

		var dataAux = yyyy + "+" + mm + "-" + dd;


		

		

		$http({
        url: 'http://localhost:8080/cadastro',
        method: "POST",
        data: { 'nome' : aluno.nome, 'email' : aluno.email, 'sexo': aluno.sexo, 'religiao' : aluno.religiao, 'data': aluno.data }
    })
    .then(function successCallBack(response) {
            // success
    }, 
    function(response) { // optional
            // failed
    });

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
		$scope.Aluno.religiao = itemSelecionado;
		console.log(auxReligiao);
		console.log(e.selectedIndex);
	}



})
.controller("contatoController",function($scope,lista,$http){
	$scope.titulo = "Lista";

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