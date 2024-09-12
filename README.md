# Projeto de Testes Automatizados com Cypress


Este repositório contém testes automatizados desenvolvidos com Cypress para validar funcionalidades de uma aplicação web.


```plaintext

├── cypress
│   ├── e2e                      # Testes End-to-End
│   │   ├── pages                # Definições das Páginas com testes associados
│   │   │   ├── checkoutPage.spec.cy.js  # Testes e interações da página de checkout
│   │   │   ├── loginPage.spec.cy.js     # Testes e interações da página de login
│   │   │   └── productsPage.spec.cy.js  # Testes e interações da página de produtos
│   │   
│   ├── integration              # Testes específicos das funcionalidades
│   │   ├── login.spec.cy.js     # Testes específicos da funcionalidade de login
│   │   ├── checkout.spec.cy.js  # Testes específicos da funcionalidade de checkout
│   │   └── products.spec.cy.js  # Testes específicos da funcionalidade de produtos
│   │
│   ├── support                  # Arquivos de suporte e comandos customizados
│       ├── commands.js          # Arquivo para comandos customizados do Cypress
│       └── e2e.js               # Configurações globais para os testes
│
├── cypress.config.js            # Configurações do Cypress
├── cypress.env.json             # Variáveis de ambiente para o projeto
└── README.md


Pré-requisitos
Antes de iniciar, certifique-se de que você tem as seguintes ferramentas instaladas:

Node.js (versão 16 ou superior)
npm (geralmente instalado junto com o Node.js)
Cypress (instalado através do npm)



Executando os Testes

Abra o Cypress para executar os testes no modo interativo:
npx cypress open



