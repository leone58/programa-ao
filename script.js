// ===== Barra de progresso de leitura =====
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const pct = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = pct + "%";
});

// ===== Botões "Executar" dos consoles =====
document.querySelectorAll(".run-btn[data-output]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const output = document.getElementById(btn.dataset.output);
    if (!output) return;
    const isHidden = output.hasAttribute("hidden");
    if (isHidden) {
      output.removeAttribute("hidden");
      btn.textContent = "✕ Ocultar saída";
    } else {
      output.setAttribute("hidden", "");
      btn.textContent = "▶ Executar";
    }
  });
});

// ===== Gerador de tabuada (Aula 4) =====
const tabuadaInput = document.getElementById("tabuadaInput");
const tabuadaBtn = document.getElementById("tabuadaBtn");
const tabuadaOutput = document.getElementById("tabuadaOutput");

function gerarTabuada() {
  const numero = parseInt(tabuadaInput.value, 10);
  tabuadaOutput.innerHTML = "";
  if (isNaN(numero)) {
    tabuadaOutput.innerHTML = '<p style="color:var(--muted)">Digite um número válido.</p>';
    return;
  }
  // Equivalente a: for i in range(1, 11)
  for (let i = 1; i <= 10; i++) {
    const line = document.createElement("div");
    line.className = "tabuada-line";
    line.innerHTML = `${numero} × ${i} = <b>${numero * i}</b>`;
    line.style.animationDelay = i * 0.03 + "s";
    tabuadaOutput.appendChild(line);
  }
}
tabuadaBtn.addEventListener("click", gerarTabuada);
tabuadaInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.nativeEvent?.isComposing) gerarTabuada();
});
gerarTabuada(); // mostra a tabuada do 7 ao carregar

// ===== Quiz =====
const perguntas = [
  {
    pergunta: "O que a palavra-chave for faz em Python?",
    codigo: null,
    opcoes: [
      "Repete um bloco de código para cada item de uma sequência",
      "Cria uma variável nova",
      "Exibe uma mensagem na tela uma única vez",
      "Encerra o programa",
    ],
    correta: 0,
    explicacao: "O <strong>for</strong> percorre uma sequência (números, lista, texto...) e repete o bloco indentado uma vez para cada item.",
  },
  {
    pergunta: "Qual será a saída deste código?",
    codigo: "for i in range(3):\n    print(i)",
    opcoes: ["1 2 3", "0 1 2", "0 1 2 3", "1 2"],
    correta: 1,
    explicacao: "O <strong>range(3)</strong> gera 0, 1 e 2. O Python começa a contar do <strong>0</strong> e o número final (3) <strong>não</strong> é incluído.",
  },
  {
    pergunta: "O que este loop imprime?",
    codigo: 'for letra in "Oi":\n    print(letra)',
    opcoes: ["Oi", "O\ni", "oi", "Erro"],
    correta: 1,
    explicacao: "Um texto também é uma coleção de letras. O loop imprime cada letra em uma linha: primeiro 'O', depois 'i'.",
  },
  {
    pergunta: "Qual sequência range(2, 10, 2) representa?",
    codigo: null,
    opcoes: ["2, 4, 6, 8", "2, 4, 6, 8, 10", "2, 3, 4 ... 10", "2, 10"],
    correta: 0,
    explicacao: "Início 2, fim 10 (não incluído) e passo 2. Ou seja: 2, 4, 6, 8. O 10 fica de fora!",
  },
  {
    pergunta: "Quantas vezes a palavra 'Oi' será impressa?",
    codigo: 'for x in range(1, 5):\n    print("Oi")',
    opcoes: ["5 vezes", "4 vezes", "3 vezes", "1 vez"],
    correta: 1,
    explicacao: "range(1, 5) gera 1, 2, 3, 4 — ou seja, 4 números. Logo, o print roda <strong>4 vezes</strong>.",
  },
  {
    pergunta: "Qual será a última linha impressa por este código?",
    codigo: "for n in range(3, 0, -1):\n    print(n)\nprint(\"Fim\")",
    opcoes: ["0", "1", "Fim", "3"],
    correta: 2,
    explicacao: "O loop conta de trás para frente: 3, 2, 1. Depois, já <strong>fora</strong> do loop, o print imprime 'Fim' como última linha.",
  },
];

const quizContainer = document.getElementById("quizContainer");
const quizSubmit = document.getElementById("quizSubmit");
const quizResult = document.getElementById("quizResult");
const quizReset = document.getElementById("quizReset");

function montarQuiz() {
  quizContainer.innerHTML = "";
  perguntas.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    let codigoHtml = "";
    if (q.codigo) {
      codigoHtml = `<pre class="quiz-codeblock">${q.codigo.replace(/</g, "&lt;")}</pre>`;
    }
    const opcoesHtml = q.opcoes
      .map(
        (op, i) => `
        <label class="quiz-option" data-q="${idx}" data-i="${i}">
          <input type="radio" name="q${idx}" value="${i}" />
          <span>${op.replace(/\n/g, " ↵ ")}</span>
        </label>`
      )
      .join("");
    card.innerHTML = `
      <span class="quiz-qnum">Pergunta ${idx + 1} de ${perguntas.length}</span>
      <p class="quiz-question">${q.pergunta}</p>
      ${codigoHtml}
      <div class="quiz-options">${opcoesHtml}</div>
    `;
    quizContainer.appendChild(card);
  });
}

function corrigirQuiz() {
  let acertos = 0;
  let respondidas = 0;

  perguntas.forEach((q, idx) => {
    const selecionada = document.querySelector(`input[name="q${idx}"]:checked`);
    const labels = document.querySelectorAll(`.quiz-option[data-q="${idx}"]`);
    labels.forEach((l) => l.classList.add("disabled"));

    // marca a correta
    const labelCorreta = document.querySelector(`.quiz-option[data-q="${idx}"][data-i="${q.correta}"]`);
    if (labelCorreta) labelCorreta.classList.add("correct");

    if (selecionada) {
      respondidas++;
      const escolha = parseInt(selecionada.value, 10);
      if (escolha === q.correta) {
        acertos++;
      } else {
        const labelErrada = document.querySelector(`.quiz-option[data-q="${idx}"][data-i="${escolha}"]`);
        if (labelErrada) labelErrada.classList.add("wrong");
      }
    }

    // adiciona explicação
    const card = labels[0]?.closest(".quiz-card");
    if (card && !card.querySelector(".quiz-explain")) {
      const exp = document.createElement("div");
      exp.className = "quiz-explain";
      exp.innerHTML = `<strong>Explicação:</strong> ${q.explicacao}`;
      card.appendChild(exp);
    }
  });

  let mensagem = "";
  const pct = (acertos / perguntas.length) * 100;
  if (pct === 100) mensagem = "Perfeito! Você dominou o loop for! 🎉";
  else if (pct >= 60) mensagem = "Muito bem! Já pegou a ideia. 👏";
  else mensagem = "Sem problema — repetição é a alma do aprendizado. Revise e tente de novo! 💪";

  quizResult.innerHTML = `Você acertou <span style="color:var(--success)">${acertos}</span> de ${perguntas.length}. ${mensagem}`;
  quizResult.removeAttribute("hidden");
  quizSubmit.setAttribute("hidden", "");
  quizReset.removeAttribute("hidden");
  quizResult.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetarQuiz() {
  montarQuiz();
  quizResult.setAttribute("hidden", "");
  quizSubmit.removeAttribute("hidden");
  quizReset.setAttribute("hidden", "");
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

quizSubmit.addEventListener("click", corrigirQuiz);
quizReset.addEventListener("click", resetarQuiz);
montarQuiz();
