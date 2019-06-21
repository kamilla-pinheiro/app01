<?php
class Usuario {
   // Área de atributos
   private $idUsuario;
   private $nome;
   private $nascimento;
   private $cpf;
   private $telefone;
   private $email;
   private $senha;
   private $colunas = array(
       'nome' => 'text',
       'nascimento' => 'date',
       'cpf' => 'text',
       'telefone' => 'text',
       'email' => 'email',
       'senha' => 'password'
   );
   // Método Construtor
   public function Usuario($idUsuario,$nome, $nascimento, $cpf, $telefone, $email, $senha) {
       $this->idUsuario = $idUsuario;
       $this->nome = $nome;
       $this->nascimento = $nascimento;
       $this->cpf = $cpf;
       $this->telefone = $telefone;
       $this->email = $email;
       $this->senha = $senha;
   }
   // Get e Set
   public function getIdUsuario() {
       return $this->idUsuario;
   }
   public function setIdUsuario($idUsuario) {
       $this->idUsuario = $idUsuario;
   }
   public function getNome() {
       return $this->nome;
   }
   public function setNome($nome) {
       $this->nome = $nome;
   }
   public function getNascimento() {
       return $this->nascimento;
   }
   public function setNascimento($nascimento) {
       $this->nascimento = $nascimento;
   }
   public function getCpf() {
       return $this->cpf;
   }
   public function setCpf($cpf) {
       $this->cpf = $cpf;
   }
   public function getTelefone() {
       return $this->telefone;
   }
   public function setTelefone($telefone) {
       $this->telefone = $telefone;
   }
   public function getEmail() {
       return $this->email;
   }
   public function setEmail($email) {
       $this->email = $email;
   }
   public function getSenha() {
       return $this->senha;
   }
   public function setSenha($senha) {
       $this->senha = $senha;
   }
   public function getColunas() {
       return $this->colunas;
   }
}
