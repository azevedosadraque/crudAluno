package br.com.crudaluno.ws.controller;

import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.crudaluno.ws.model.Aluno;
import br.com.crudaluno.ws.service.AlunoService;

@RestController
public class AlunoController {
	
	@Autowired
	AlunoService alunoService;
	
	//End Point
	
	@RequestMapping(method=RequestMethod.POST, value="/cadastro", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Aluno> cadastrarAluno(@RequestBody Aluno aluno ){
		
		Aluno alunoCadastrado = alunoService.cadastrar(aluno);
		return new ResponseEntity<Aluno>(alunoCadastrado, HttpStatus.CREATED);

	} 
	
	@RequestMapping(method=RequestMethod.GET,value="/cadastro", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Aluno>> buscarTodosAlunos(){
		
		Collection<Aluno> alunosBuscados = alunoService.buscarTodos();
		return new ResponseEntity<>(alunosBuscados, HttpStatus.OK);

	} 
	
	@RequestMapping(method=RequestMethod.DELETE,value="/cadastro/{id}")
	public ResponseEntity<Aluno> excluirAluno(@PathVariable Integer id){
		
		Aluno AlunoEncontrado = alunoService.buscaPorId(id);
		
		if(AlunoEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		else {
			alunoService.excluir(AlunoEncontrado);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/cadastro", consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Aluno> alterarAluno(@RequestBody Aluno aluno){
		
		Aluno alunoAlterado = alunoService.alterar(aluno);
		
		return new ResponseEntity<>(alunoAlterado, HttpStatus.OK);

	} 


}
