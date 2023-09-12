<h3 align="center">{ School Library }</h1>
<h6 align="center"> Reading Changes You</h5>

<p align="center">Sistema de gerenciamento de biblioteca que permite aos usuários (alunos e professores) realizarem operações de empréstimo, devolução, e busca de livros. O sistema será orientado a objetos, seguindo os princípios da programação orientada a objetos.</p>
<p align="center">
  <a href="#techs">Techs</a>&nbsp;|&nbsp;
  <a href="#estrutura">Estrutura do Projeto</a>&nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
  <a href="#dependencias">Dependencias</a>&nbsp;|&nbsp;
  <a href="#execucao">Execução</a>&nbsp;|&nbsp;
  <a href="#testes">Testes</a>&nbsp;|&nbsp;
  <a href="#prompts">Prompts</a>&nbsp;|&nbsp;
  <a href="#license">Licença</a>
</p>
<br>

## 🎮 Techs <a name="techs"></a>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/pt-br)
- [Vitest](https://vitest.dev/)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js)
- [Git](https://git-scm.com/)

## 🧱 Estrutura do Projeto <a name="estrutura"></a>
  ```
  src      
  └───entities
          └───Book
              └───Book.spec.ts
              └───Book.ts
          └───BookLoan
              └───BookLoan.spec.ts
              └───BookLoan.ts
          └───Library
              └───Library.spec.ts
              └───Library.ts         
          └───Student
              └───Student.spec.ts
              └───Student.ts
          └───Teacher
              └───Teacher.spec.ts
              └───Teacher.ts
          └───User
              └───User.spec.ts
              └───User.ts
  └───index.ts
  .eslintrc.json
  .gitignore
  package-lock.json
  package.json
  tsconfig.json
  vite.config.ts
  ```

## 🚩 Funcionalidades <a name="funcionalidades"></a>

- [X] Adicionar Livro: Adiciona um livro à lista de livros
- [X] Registrar Usuário: Registra um novo usuário na biblioteca
- [X] Realizar Empréstimo: Registra um novo empréstimo na biblioteca, atualizando as listas de empréstimos e disponibilidade de livros
- [X] Realizar Devolução: Atualiza as informações do empréstimo após a devolução do livro
- [X] Buscar Livro por Título: Retorna uma lista de livros que correspondem ao título informado
- [ ] Listar os ultimos empréstimos de um livro
- [ ] Ao realizar um empréstimo, o sistema deve registrar os empréstimos em uma nova propriedade chamada histórico de empréstimos nas entidades Aluno e Professor

## 🕹️ Execução do Projeto <a name="execucao"></a>
   ``` 
   git clone https://github.com/devcodecampos/school-library.git

   cd school-library

   npm install

   npm run dev
   ```

## 📚 Dependencias <a name="dependencias"></a>
  [Typescript](https://www.typescriptlang.org/download)
   ```
  npm install -D typescript
   ```
  [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
   ```
  npm install -D ts-node-dev
   ```
  [Inquirer](https://github.com/SBoudrias/Inquirer.js)
   ```
  npm install @inquirer/prompts
   ``` 
  [Vitest](https://vitest.dev/guide/)
   ```
  npm install -D vitest
   ```
  [Vitest UI](https://vitest.dev/guide/ui.html)
   ```
  npm install -D @vitest/ui
   ```
  [UUID](https://www.npmjs.com/package/uuid)
   ```
  npm install uuid
   ```
  [ESLint](https://eslint.org/docs/latest/use/getting-started)
   ```
  npm init @eslint/config
   ```

## 🧪 Testes <a name="testes"></a>
  [Vitest](https://vitest.dev/guide/)
   ``` 
   npm run test
   ```
  [Vitest UI](https://vitest.dev/guide/ui.html)
   ```
  npm run test:ui
   ```
   ```ts
   ✓ src/entities/User/User.spec.ts (1)
   ✓ src/entities/Book/Book.spec.ts (1)
   ✓ src/entities/BookLoan/BookLoan.spec.ts (2)
   ✓ src/entities/Student/Student.spec.ts (1)
   ✓ src/entities/Teacher/Teacher.spec.ts (1)
   ✓ src/entities/Library/Library.spec.ts (3)

   Test Files  6 passed (6)
        Tests  9 passed (9)
   ```

## 🖥️ Prompts <a name="prompts"></a>
Exemplos de prompts que o projeto possui:

[App Menu]()
```
{ SCHOOL LIBRARY }
? Select An Option (Use arrow keys)
  searchBookByTitle
  addBook
> registerUser
  bookLoan
  bookReturn
  getUsers
  getBookLoans
  getBooks
  exit
```

[Adicionar Livro: Adiciona um livro à lista de livros]()
```
{ SCHOOL LIBRARY }
? Select An Option addBook
? title: The Outsider
? author: Stephen King
? publishDate, in the format 2023/12/01: 2018/05/22
? genre: Horror
? quantityAvailable: 2
```

[Registrar Usuário: Registra um novo usuário na biblioteca]()
```
{ SCHOOL LIBRARY }
? Select An Option registerUser    
? Select An Option
> student
  teacher

{ SCHOOL LIBRARY }
? Select An Option registerUser    
? Select An Option student
? name: Matheus
? studentClass: backend
? registrationId: fap-01
```

[Listar Usuários: Lista os usuários da biblioteca]()
```
{ SCHOOL LIBRARY }
? Select An Option getUsers
[
  Student {
    _userProps: { name: 'Matheus', id: '99ff9cd9-9b81-4571-806d-fe136ff6265c' },
    _studentProps: { studentClass: 'backend', registrationId: 'fap-01' }        
  }
]
```

## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)
