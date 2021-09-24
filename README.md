### Informações Gerais

Projeto desenvolvido durante Bootcamp Desenvolvedor Tech Pan oferecido pela IGTI.

---

# Boas vindas ao repositório do projeto Financiamento!

Neste projeto foi feita uma aplicação para simulação de um financiamento com base nos dados fornecidos, exibindo o valor das primeiras prestações, de acordo com o Sistema de Amortizações Constantes (SAC).

Lembrando que esta aplicação corresponde aos meus esforços para melhorar minhas hard skills e soft skills, sinta-se à vontade para explorá-la! Feedbacks construtivos são sempre bem vindos!

Abaixo você poderá encontrar mais informações técnicas sobre este projeto.

---

# Sumário

- [Habilidades](#habilidades)
- [Intruções para fazer o fork do repositório](#intruções-para-fazer-o-fork-do-repositório)
- [Informações do projeto](#informações-do-projeto)
  - [Linter](#linter)
  - [Funcionamento da aplicação](#funcionamento-da-aplicação)

---

# Habilidades

Nesse projeto, fui capaz de exercitas os seguintes conceitos:  

- Documentos HTML.
- Estilização com CSS.
- Programação em JavaScript.
- Reagir a eventos e alterar o DOM.

---

# Instruções para fazer o fork do repositório

1. Faça o fork do repositório

2. Instale as dependências do projeto
  * Instale as dependências:
    * `npm install`

---

# Informações do projeto

### Linter

Para garantir a qualidade do código de forma a tê-lo mais legível, de mais fácil manutenção e seguindo as boas práticas de desenvolvimento foi utilizado neste projeto o linter `ESLint`.

### Funcionamento da aplicação

A aplicação contém três campos de entrada numéricos: Valor, Prazo (anos) e Juros ao ano e um botão "Simular", ao apertar o botão, é calculada e exiba na interface as seguintes informações:

a. Prazo (meses): prazo total do financiamento em meses, ou seja, o valor de Prazo (anos) multiplicado por 12.

b. Juros ao mês: taxa de juros mensal corresponde à taxa anual informada. Tal taxa é calculada com a seguinte fórmula:

Jm = [(1 + Ja)^(1/12)] - 1, onde Jm = juros mensal e Ja = juros anual

c. Juros acumulados: soma de todos os valores pagos de juros, considerando todas as prestações, até o final do financiamento.

d. Tabela com o valor das 5 primeiras prestações, indicando o valor pago como amortização, o valor pago como juros e o total (soma dos dois).

O cálculo da parcela foi feito de acordo com o Sistema de Amortizações Constantes (SAC). Neste sistema, a parcela é composta de:

a. Amortização: valor total financiado dividido pelo número de prestações. Este valor é o mesmo em todas as prestações. Por exemplo, se foi financiado 200.000,00 em 240 parcelas, a amortização é 833,33.

b. Juros: saldo devedor multiplicado pelos juros ao mês. O saldo devedor inicialmente é o valor total, e diminui a cada prestação paga de acordo com o valor de amortização. Por exemplo, ao calcular a terceira prestação, o saldo devedor seria: 200.000,00 – 2 × 833,33.

---