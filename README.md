# Autentificação Firebase - DSM

Este projeto é um trabalho da disciplina **Desenvolvimento de Dispositivos Móveis** do professor Angoti, no IFTM, e demonstra a implementação de autenticação de usuários utilizando **Firebase Authentication** em uma aplicação React Native.

## Objetivos

- Permitir que usuários possam se cadastrar, realizar login e logout.
- Utilizar a autenticação do Firebase para gerenciar sessões de usuários.
- Exemplo prático de integração entre React Native e serviços em nuvem (Firebase).

## Funcionalidades

- **Cadastro de usuário:** Tela para criar uma conta com e-mail e senha (mínimo 6 caracteres).
- **Login:** Tela para autenticação do usuário já registrado.
- **Home:** Tela exibida apenas para usuários autenticados, mostrando o e-mail do usuário e opção de logout.
- **Logout:** Permite encerrar a sessão atual.
- **Validação e feedback de erros:** Mensagens amigáveis para erros comuns do Firebase (e-mail inválido, senha incorreta, usuário não encontrado, etc).

## Estrutura do Projeto

- `App.js`: Inicializa a navegação principal da aplicação.
- `index.js`: Ponto de entrada que registra o componente principal.
- `src/services/firebase.js`: Configuração do Firebase e métodos de autenticação (registrar, login, logout).
- `src/navigators/MainStack.js`: Gerencia as rotas/telas, alternando entre autenticação e área logada de acordo com o estado do usuário.
- `src/screens/LoginScreen.js`: Tela para login de usuários.
- `src/screens/RegisterScreen.js`: Tela para cadastro de novos usuários.
- `src/screens/HomeScreen.js`: Tela principal após login, exibindo informações do usuário e botão de logout.

## Como funciona

1. **Cadastro**: O usuário informa e-mail e senha, que são enviados para o Firebase. Em caso de sucesso, é autenticado automaticamente.
2. **Login**: Usuário entra com e-mail e senha já cadastrados. O Firebase valida as credenciais.
3. **Sessão**: Enquanto estiver autenticado, usuário navega na tela Home; caso saia, volta para tela de login.
4. **Logout**: Usuário encerra a sessão e volta para a tela de login/cadastro.

## Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Firebase Authentication](https://firebase.google.com/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## Observações

- O projeto serve como base para aplicações que necessitam autenticação via e-mail/senha.
- Para testar, é necessário configurar o Firebase e inserir suas próprias credenciais no arquivo `src/services/firebase.js`.
- Este código é didático e voltado para fins de aprendizado.

---

**Disciplina:** Desenvolvimento de Dispositivos Móveis  
**Professor:** Angoti  
**Instituição:** IFTM  
