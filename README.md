# Back-School

Este é o repositório do projeto "back-school", desenvolvido em NestJS. Este documento fornece informações essenciais para configurar, executar e contribuir para o projeto.

## Configuração do Ambiente de Desenvolvimento

### 1. Clone o Repositório:

```bash
git clone https://github.com/seu-usuario/back-school.git
cd back-school
```
### 2. Instale as Dependências:

```bash
npm install
```
### 3. Configuração do Prisma:

Certifique-se de que o Prisma está configurado corretamente. Execute o seguinte comando para gerar e aplicar as migrações:

```bash
npx prisma migrate dev
```

### Scripts Disponíveis

##### Build:
```bash
  npm run build
```
##### Formatar o Código:
```bash
  npm run format
```
##### Iniciar o Servidor (Modo de Desenvolvimento):
```bash
  npm run start:dev
```
##### Executar Testes:
```bash
  npm test
```
##### Testes com Cobertura:
```bash
 npm run test:cov
```
##### Executar Testes de Integração:
```bash teste
  npm run test:e2e
```


### Dependências
Principal:

    @nestjs/common: ^10.0.0
    @nestjs/core: ^10.0.0
    @nestjs/mapped-types: *
    @nestjs/platform-express: ^10.0.0
    @prisma/client: ^5.8.1
    class-transformer: ^0.5.1
    class-validator: ^0.14.1
    reflect-metadata: ^0.1.13
    rxjs: ^7.8.1

Desenvolvimento:

    @nestjs/cli: ^10.0.0
    @nestjs/schematics: ^10.0.0
    @nestjs/testing: ^10.0.0
    @types/express: ^4.17.17
    @types/jest: ^29.5.2
    @types/node: ^20.3.1
    @types/supertest: ^6.0.0
    @typescript-eslint/eslint-plugin: ^6.0.0
    @typescript-eslint/parser: ^6.0.0
    eslint: ^8.42.0
    eslint-config-prettier: ^9.0.0
    eslint-plugin-prettier: ^5.0.0
    jest: ^29.5.0
    prettier: ^3.0.0
    prisma: ^5.8.1
    source-map-support: ^0.5.21
    supertest: ^6.3.3
    ts-jest: ^29.1.0
    ts-loader: ^9.4.3
    ts-node: ^10.9.1
    tsconfig-paths: ^4.2.0
    typescript: ^5.1.3

### Contribuindo

Sinta-se à vontade para contribuir para este projeto! Antes de enviar uma solicitação de pull, certifique-se de seguir as diretrizes de contribuição. Se você encontrar problemas ou tiver sugestões, abra uma issue.

Obrigado por contribuir para o projeto "back-school"!
