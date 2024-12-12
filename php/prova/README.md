# Prova 3 - 2024
## Pasta `db` 
Contem o sql para criação do banco de dados `db_consultation` e tabelas.
## Pasta `assets/css`
Contem os arquivos css para estilização da página.
## Pasta `assets/js`
Contem os arquivos js para interação com a página.
## Pasta `api`
Contem os scripts php para onde serão feitas as requisições.
## Cadastro de Pacientes - Questão 01 (3,0 PONTOS)

Nos scripts `patient-register.html` e `assets/js/patient-register.js`, faça uma requisição do tipo POST para o script `api/patient-insert.php` enviando os dados do paciente informados pelo usuário no formulário. Depois exiba uma mensagem de sucesso ou erro utilizando a função `showToast` presente no script `assets/js/functions.js`.

Script `patient-insert.php`. Recebe por POST os dados do paciente e retorna um JSON com o resultado. Possíveis retornos:

- Quando o paciente é cadastrado com sucesso:

```JSON
{
    "type": "success",
    "message": "Paciente cadastrado com sucesso",
    "data": {
        "id": 1,
        "name": "Fulano de Tal"
    }
}
```
```php
$response = [
    "type" => "success",
    "message" => "Paciente cadastrado com sucesso",
    "data" => $patient // vetor dos médicos
];
```
- Quando faltam dados para o cadastro:

```JSON
{
    "type": "error",
    "message": "Informe todos os dados do paciente"
}
```
```php
$response = [
    "type" => "error",
    "message" => "Informe todos os dados do paciente"
];
```
## Lista de Especialidades - Questão 02 (2,0 PONTOS)
Nos Scripts `doctor-list.html` e `assets/js/doctor-list.js`, faça uma requisição do tipo GET para o script `api/specialties-list.php` e liste todas as especialidades disponíveis. Apresente-as no `<select id="specialtyFilter" name="specialtyFilter">` e no `<select id="editSpecialty"></select>`

Script `api/specialties-list.php`. Não recebe parâmetros. Lista todas as especialidades. Retorna um JSON com as especialidades. Retorno:

```JSON
{
    "type": "success",
    "message": "Especialidades encontradas",
    "data": [
        {
            "id": 1,
            "name": "Cardiologia"
        },
        {
            "id": 2,
            "name": "Ortopedia"
        }
    ]
}
```
```php
$response = [
    "type" => "success",
    "message" => "Especialidades encontradas",
    "data" => $specialties // vetor das especialidades
];
```
## Lista de Médicos por Especialidade - Questão 03 (3,0 PONTOS)

Nos Scripts `doctor-list.html` e `assets/js/doctor-list.js`, quando o `<select id="specialtyFilter" name="specialtyFilter">` for alterado (evento change) faça uma requisição do tipo GET enviando o id da especialidade para o script `api/doctors-by-specialty.php` e liste todos os médicos de uma especialidade específica. 

Utilize a função `showToast` presente no script `assets/js/functions.js` para exibir mensagens de sucesso ou erro.

Apresente os médico em `<section id="doctorList">`, sendo cada médico um card com o nome, CRM e especialidade:

```html

<article class="doctor-card">
    <header>
        <h2>Dra. Maria Helena Santos</h2>
        <button class="edit-btn">Editar</button>
    </header>
    <section>
        <p><strong>CRM:</strong> CRM-RJ 67890</p>
        <p><strong>Especialidade:</strong> Pediatria</p>
    </section>
</article>

```
Script `doctors-by-specialty.php`. Lista todos os médicos de uma especialidade específica. Recebe por GET o ID da especialidade e retorna um JSON com os médicos. Possíveis retornos:

- Quando médicos da especialidade são encontrados:

```JSON
{
    "type": "success",
    "message": "Médicos encontrados",
    "data": [
        {
            "id": 1,
            "name": "Dr. Fulano",
            "crm": "12345",
            "specialty": "Cardiologia"
        },
        {
            "id": 2,
            "name": "Dr. Beltrano",
            "crm": "54321",
            "specialty": "Cardiologia"
        }
    ]
}
```
```php
$response = [
    "type" => "success",
    "message" => "Médicos encontrados",
    "data" => $doctors // vetor dos médicos
];
```
Quando não há médicos com a especialidade informada:

```JSON
{
    "type": "warning",
    "message": "Não há médicos com a especialidade informada"
}
```
```php
$response = [
    "type" => "warning",
    "message" => "Não há médicos com a especialidade informada"
];
```
## Edição das Informações do Médico - Questão 04 (2,0 PONTOS)
Ainda nos scripts `doctor-list.html` e `assets/js/doctor-list.js`, quando os botões de edição forem clicados, faça uma requisição do tipo GET para `api/doctor-get.php` enviando o id do médico presente em `<article doctor-id="3" class="doctor-card">`. 

O retorno será um JSON com os dados do médico. Exiba os dados do médico no formulário da modal (presente no `doctor-list.html`) com os campos para edição.
```JSON
{
    "type": "success",
    "message": "Médico encontrado",
    "data": {
        "id": 1,
        "name": "Dr. Fulano",
        "crm": "12345",
        "specialty": "Cardiologia"
    }
}
```
```php
$response = [
    "type" => "success",
    "message" => "Médico encontrado",
    "data" => $doctor // veto do médico encontrado
];
```
As funções openModal e closeModal estão presentes no script `assets/js/functions.js`.

ATENÇÃO: NÃO É NECESSÁRIO IMPLEMENTAR A REQUISIÇÃO DE ATUALIZAÇÃO DOS DADOS DO MÉDICO.