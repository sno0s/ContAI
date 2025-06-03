# <h1>Desafio técnico scoder - ContAI</h1>
Olá! Meu nome é Matheus e este é o meu projeto feito para o desafio técnico da scoder!
Para começar, tenho noções básicas de frontend mas nunca tinha usado react, sei o básico de typescript mas usei IA para realizar a parte do front end em primeiro momento, o backend foi mais fácil de entender e integrar por já ter tido esse contato com MySQL e Java. O backend já está no docker e creio que dessa forma fique mais fácil de qualquer um rodar em sua máquina.

<h1>Como rodar na sua máquina</h1>

Com o repositório baixado, é só entrar na pasta "contai-backend" pelo terminal e rodar "docker compose up --build";

Após isso é só rodar o frontend na pasta "contai-frontend" pelo terminal e rodar "npm start", o mesmo estará em "http://localhost:3000/".

<h1>Como o projeto funciona?</h1>
Ao abrir a home do frontend o site já vai tentar buscar todos os lançamentos de produtos salvos no banco de dados e mostrar em tabelas separadas por meses do ano, sempre mostrando o faturamento no final de cada mês.


<img src="/images/home.png">


É possível fazer novos lançamentos e todos os campos precisam estar preenchidos.

<h1>Considerações finais</h1>
Mesmo que eu não seja aprovado nessa vaga, aprendi bastante sobre como o docker e o postgreSQL funcionam, já tenho alguns projetos pessoais em casa no meu servidor pessoal que rodam em docker e containers mas nunca tinha estudado a fundo, foi mais tranquilo do que eu pensava trabalhar com o postgres e vi algumas coisas parecidas com o MySQL, ainda assim sinto falta do Workbench :(

<img src="/images/postgres_screen.png">
