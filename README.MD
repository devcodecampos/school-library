<h3 align="center">{ School Library }</h1>
<h6 align="center"> Reading Changes You</h5>

<p align="center">Sistema de gerenciamento de biblioteca que permite aos usuários (alunos e professores) realizarem operações de empréstimo, devolução, e busca de livros. O sistema será orientado a objetos, seguindo os princípios da programação orientada a objetos.</p>
<p align="center">
  <a href="#techs">Techs</a>&nbsp;|&nbsp;
  <a href="#estrutura">Estrutura do Projeto</a>&nbsp;|&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>&nbsp;|&nbsp;
  <a href="#dependencias">Dependencias</a>&nbsp;|&nbsp;
  <a href="#execucao">Execução do Projeto</a>&nbsp;|&nbsp;
  <a href="#testes">Testes</a>&nbsp;|&nbsp;
  <a href="#license">License</a>
</p>
<br>

<p align="center">
⏳ EM DESENVOLVIMENTO ⏳
</p>

## 🎮 Techs <a name="techs"></a>
Este projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Node.js](https://nodejs.org/pt-br)
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
          └───student.mjs
  └───index.js
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

## 📚 Dependencias <a name="dependencias"></a>
  [Typescript](https://www.typescriptlang.org/download)
   ```
  npm install -D typescript
   ```
  [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
   ```
  npm install -D ts-node-dev
   ```
  [Vitest](https://vitest.dev/guide/)
   ```
  npm install -D vitest
   ```
  [Vitest UI](https://vitest.dev/guide/ui.html)
   ```
  npm install -D @vitest/ui
   ```
  [ESLint](https://eslint.org/docs/latest/use/getting-started)
   ```
  npm init @eslint/config
   ```

## 🕹️ Execução do Projeto <a name="execucao"></a>
   ``` 
   git clone https://github.com/devcodecampos/school-library.git

   npm install

   npm run dev
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
## 📝 Licença <a name="license"></a>
MIT License

## 🤖Autor 
Feito por Matheus Campos

[![Linkedin Badge](https://img.shields.io/badge/-devcodecampos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devcodecampos/)](https://www.linkedin.com/in/devcodecampos/) 
[![Gmail Badge](https://img.shields.io/badge/-devcodecampos-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:devcodecampos@gmail.com)](mailto:devcodecampos@gmail.com)
