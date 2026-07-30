# Roteiro da Aula — Semana 9: Estruturas de Repetição (loop `for`)

> **Para o professor:** este arquivo é o seu "guia de bolso". Ele traz, passo a passo, **o que você vai falar e perguntar** durante a aula. Você não precisa decorar nada — pode ler naturalmente, com suas palavras. O site (`index.html`) é o que você projeta para os alunos.
>
> ⏱️ **Duração total:** ~150 minutos
> 🎯 **Objetivo da aula:** fazer os alunos entenderem, na prática, o que é um loop `for`, como percorrer coleções, usar o `range()` e montar tabelas de multiplicação.
> 💻 **Linguagem usada nos exemplos:** Python.

---

## Como usar este material

1. Abra o arquivo `index.html` no navegador e projete para a turma.
2. Vá acompanhando as seções do site na mesma ordem deste roteiro (Início → Aula 1 → 2 → 3 → Desafio → Quiz).
3. Cada exemplo de código tem um botão **"▶ Executar"** — clique nele **só depois** de perguntar aos alunos "o que vocês acham que vai aparecer?". Isso deixa a aula participativa.
4. As falas em **_itálico_** são sugestões do que dizer. Adapte do seu jeito!

---

## ⏱️ Cronograma resumido (150 min)

| Momento | Bloco | Tempo |
|--------|-------|-------|
| Abertura | Boas-vindas e o "porquê" | 15 min |
| Aula 1 | Sintaxe básica do `for` | 30 min |
| Aula 2 | Iteração sobre coleções | 25 min |
| ☕ | Pausa | 10 min |
| Aula 3 | Função `range()` e passo | 30 min |
| Aula 4 | Desafio: tabuada | 20 min |
| Quiz | Fixação + encerramento | 20 min |

---

## 🟢 ABERTURA (15 min)

> _"Bom dia, pessoal! Tudo bem com vocês? Hoje a nossa aula vai ser bem prática e eu prometo que, no final, vocês vão olhar para o computador de um jeito diferente."_

> _"Deixa eu começar com uma pergunta: imaginem que eu peço para vocês escreverem a frase 'Estou aprendendo a programar' **cem vezes** no caderno. Chato, né? Dá vontade nem de começar."_

> _"Pois é exatamente esse tipo de tarefa repetitiva que o computador **adora** fazer por nós. E a ferramenta que manda o computador repetir algo se chama **loop**. Hoje a gente vai aprender o loop mais usado de todos: o `for`."_

**O que fazer:**
- Mostre a tela de **Início** do site.
- Leia o título grande junto com eles: _"Por que repetir código à mão se o computador pode repetir por você?"_

**Pergunte à turma (deixe eles responderem):**
- _"Vocês conseguem pensar em alguma coisa no dia a dia que se repete várias vezes? Pode ser qualquer coisa."_ (Ex.: tocar o alarme todo dia, passar em cada aluno na chamada, contar dinheiro nota por nota.)

> _"Guardem esses exemplos, porque é exatamente isso que o `for` faz: ele pega uma sequência de coisas e faz a mesma ação para cada uma delas."_

---

## 🔵 AULA 1 — Sintaxe e uso básico do `for` (30 min)

**Abra a seção Aula 1 do site.**

> _"Vamos começar entendendo como o `for` é escrito. Calma que é mais simples do que parece."_

### Passo 1 — Ler a estrutura junto
Mostre o quadro **"A anatomia de um `for`"** e leia cada parte:

> _"Todo `for` tem: a palavra `for`, uma **variável** que vai guardar o item da vez, a palavra `in`, e uma **sequência** para percorrer. E o que vem embaixo, com um espacinho pra dentro, é o que vai se repetir."_

### Passo 2 — O detalhe da indentação
Mostre o card amarelo **"Atenção à indentação!"**.

> _"Esse espacinho no começo da linha tem nome: **indentação**. No Python, ele é obrigatório! É ele que diz o que está 'dentro' do loop. Se esquecerem, o Python reclama. Anotem isso, porque é o erro número um de quem está começando."_

### Passo 3 — O primeiro código
Mostre o console `exemplo_01.py`.

> _"Olhem esse código. Ele diz assim: 'para cada `i` no range de 5, imprima uma mensagem'. Antes de eu executar... **o que vocês acham que vai aparecer na tela?**"_

**Pergunte:**
- _"Quantas vezes essa mensagem vai aparecer?"_
- _"Vai começar contando de que número?"_

👉 Deixe eles chutarem. Aí clique em **▶ Executar**.

> _"Repararam numa coisa estranha? Começou no **ZERO**! Isso é super importante: o computador quase sempre começa a contar do zero, não do um. Vai parecer esquisito no começo, mas vocês se acostumam."_

**💡 Dica de ouro para falar:** _"`range(5)` gera cinco números: 0, 1, 2, 3 e 4. São cinco números, mas o último é o 4, não o 5."_

---

## 🔵 AULA 2 — Iteração sobre coleções (25 min)

**Abra a seção Aula 2 do site.**

> _"Até agora a gente repetiu usando números. Mas o `for` é muito mais poderoso: ele consegue percorrer **listas de coisas**. A gente chama isso de 'coleção'."_

### Exemplo 1 — Lista de frutas
Mostre o console `frutas.py`.

> _"Aqui eu criei uma lista com três frutas. Olhem o loop: 'para cada fruta na lista de frutas, imprima que eu gosto dela'. **O que vai aparecer?**"_

**Pergunte:**
- _"Quantas linhas vão aparecer? Por quê?"_ (Resposta: três, porque tem três frutas.)

👉 Execute e confira com eles.

> _"Percebam que eu não precisei dizer 'faça isso três vezes'. O loop **sozinho** descobriu que a lista tem três itens e parou na hora certa. Isso é maravilhoso: se eu adicionar mais uma fruta, ele repete uma vez a mais automaticamente."_

### Exemplo 2 — Percorrendo um texto
Mostre o console `letras.py`.

> _"Agora uma surpresa: até uma palavra é uma coleção! Uma coleção de letras. Olhem o que acontece quando eu passo a palavra 'Python' pro loop."_

**Pergunte antes de executar:**
- _"O que vocês acham que vai sair na tela?"_

👉 Execute.

> _"Cada letra numa linha! Isso mostra que o `for` percorre qualquer coisa que tenha vários itens: listas, textos, e muito mais que vocês vão descobrir depois."_

---

## ☕ PAUSA (10 min)

> _"Vamos fazer uma pausa rápida de 10 minutinhos para descansar a cabeça. Quando voltarmos, vou mostrar um truque para gerar sequências de números automaticamente."_

---

## 🔵 AULA 3 — Função `range()` e passo variável (30 min)

**Abra a seção Aula 3 do site.**

> _"Voltamos! Lembram do `range(5)` lá do começo? Agora vamos entender ele de verdade, porque ele é mais esperto do que parece."_

### Passo 1 — As três informações do range
Mostre os cards de exemplos (`range(5)`, `range(2, 6)`, etc.) um por um.

> _"O `range` pode receber até três informações: **onde começa**, **onde termina** e **de quanto em quanto** ele anda (a gente chama isso de 'passo')."_

Explique cada card:
- **`range(5)`** → _"Só um número: começa no 0 e vai até antes do 5."_
- **`range(2, 6)`** → _"Dois números: começa no 2, vai até antes do 6."_
- **`range(0, 10, 2)`** → _"Três números: de 0 a 10, mas pulando de 2 em 2. Só os pares!"_
- **`range(10, 0, -1)`** → _"Com passo negativo, ele conta de trás para frente!"_

**Pergunte:**
- _"Se eu quisesse os números 1, 3, 5, 7, 9 (só os ímpares até 10), como eu escreveria o range?"_ (Resposta esperada: `range(1, 10, 2)`.)

### Passo 2 — Contagem regressiva
Mostre o console `contagem_regressiva.py`.

> _"Vamos ver o passo negativo em ação com uma contagem regressiva de foguete. **O que vai aparecer primeiro, o 5 ou o 1?**"_

👉 Execute.

> _"Contou de trás pra frente e, no final, lançou o foguete! Reparem que a frase do foguete apareceu **uma vez só**, no final — porque ela está **fora** do loop, sem a indentação. Voltamos naquele detalhe do espacinho, viram como ele muda tudo?"_

---

## 🟡 AULA 4 — Desafio: Tabelas de multiplicação (20 min)

**Abra a seção Aula 4 do site.**

> _"Agora chegou a hora de juntar tudo o que aprendemos e resolver um problema de verdade: montar uma **tabuada** usando o `for`."_

### Passo 1 — Brincar com a ferramenta
Use o campo **"Escolha um número"** do site.

> _"Vou digitar um número aqui e o site vai gerar a tabuada inteira usando um loop por trás. Que número vocês querem ver a tabuada?"_

👉 Digite o número que a turma pedir e clique em **Gerar tabuada**.

**Pergunte:**
- _"Quantas linhas apareceram?"_ (Resposta: 10.)
- _"Então qual range foi usado por trás? De 1 até...?"_ (Resposta: `range(1, 11)`, porque o 11 não entra e a tabuada vai até o 10.)

### Passo 2 — Mostrar o código
Mostre o console `tabuada.py` e execute.

> _"Olhem como é curtinho o código! Só isso gera a tabuada inteira. Se eu tivesse que escrever linha por linha, seriam 10 linhas quase iguais. O loop faz o trabalho pesado pra gente."_

**Desafio para a turma (se sobrar tempo):**
- _"Como vocês mudariam esse código para mostrar a tabuada indo até o 12 em vez de 10?"_ (Resposta: trocar `range(1, 11)` por `range(1, 13)`.)

---

## 🟣 QUIZ + ENCERRAMENTO (20 min)

**Abra a seção Quiz do site.**

> _"Para fechar, vamos fazer um quiz rapidinho. Vou ler cada pergunta e quero que vocês pensem na resposta antes de eu clicar. Algumas perguntas mostram um código e vocês têm que adivinhar o que ele imprime — igualzinho a gente fez a aula inteira."_

**Como conduzir:**
1. Leia cada pergunta em voz alta.
2. Peça para a turma votar na resposta (levantando a mão ou falando).
3. Marque a opção mais votada e siga para a próxima.
4. No final, clique em **"Ver meu resultado"** — o site mostra a correção com **explicação de cada questão**. Leia as explicações junto com eles.

**Gabarito rápido (para você conferir):**
1. Repete um bloco para cada item de uma sequência.
2. `0 1 2` (começa no zero, o 3 não entra).
3. Uma letra por linha: `O` e depois `i`.
4. `2, 4, 6, 8` (o 10 não entra).
5. 4 vezes (`range(1, 5)` = 1, 2, 3, 4).
6. `Fim` (impresso fora do loop, é a última linha).

### Fala de encerramento

> _"E é isso, pessoal! Hoje a gente aprendeu que o loop `for` serve para repetir tarefas sem sofrimento. A gente viu como escrever, como percorrer listas e textos, como usar o `range()` e até montou tabuadas. O mais importante que vocês precisam levar pra casa é: **sempre que uma tarefa se repete, provavelmente existe um loop para resolver**."_

> _"Na próxima aula a gente vai avançar ainda mais. Alguma dúvida antes de terminarmos?"_

---

## 📌 Erros comuns dos alunos (fique atento!)

- **Esquecer os dois-pontos (`:`)** no final da linha do `for`.
- **Esquecer a indentação** do bloco que se repete.
- Achar que `range(5)` vai até o 5 (na verdade vai até o **4**).
- Confundir "quantos números" com "qual o último número".

Se alguém errar, aproveite! Erro é a melhor oportunidade de fixar o conteúdo. 😉

---

## 🗂️ Arquivos deste projeto

- `index.html` — a página que você projeta para a turma.
- `styles.css` — a aparência do site (não precisa mexer).
- `script.js` — a parte interativa: botões, tabuada e quiz (não precisa mexer).
- `README.md` — este roteiro.

**Como abrir:** basta dar dois cliques no `index.html` que ele abre no navegador. Não precisa instalar nada.
