const questions = {
  harry: [
  { question: "Який дар Гаррі отримав від матері?", answers: ["Захист любові", "Вміння літати", "Невидимість"], correct: 0, time: 25 },
  { question: "Що таке хоркрукс?", answers: ["Предмет з часткою душі", "Закляття", "Тварина"], correct: 0, time: 25 },
  { question: "Яку форму мав патронус Гаррі?", answers: ["Олень", "Вовк", "Кіт"], correct: 0, time: 20 },
  { question: "Хто вбив Сіріуса Блека?", answers: ["Белатриса Лестрейндж", "Волдеморт", "Драко"], correct: 0, time: 25 },
  { question: "Скільки разів Гаррі вигравав Кубок Гоґвортсу?", answers: ["Тричі", "Жодного разу", "Один раз"], correct: 0, time: 25 },
  { question: "Який факультет відомий своєю хитрістю?", answers: ["Слизерин", "Когтевран", "Пуффендуй"], correct: 0, time: 20 },
  { question: "Яку тварину перетворювався професор Макґонеґел?", answers: ["Кішка", "Сова", "Кролик"], correct: 0, time: 20 },
  { question: "Справжнє ім’я Волдеморта?", answers: ["Том Реддл", "Люціус Мелфой", "Гелерт Ґріндевальд"], correct: 0, time: 25 },
  { question: "Який магічний предмет дозволяв Гаррі бачити спогади?", answers: ["Омут пам’яті", "Мерзокамінь", "Снітч"], correct: 0, time: 25 },
  { question: "Яке число було на сейфі Гаррі в Грінґотсі?", answers: ["687", "713", "394"], correct: 0, time: 30 }
],
  starwars: [
  { question: "Як звали імператора, що правив Галактикою?", answers: ["Палпатін", "Пло Кун", "Грівус"], correct: 0, time: 25 },
  { question: "Який світловий меч у Вейдера?", answers: ["Червоний", "Синій", "Фіолетовий"], correct: 0, time: 20 },
  { question: "Що таке 'Орден 66'?", answers: ["Наказ знищити джедаїв", "План евакуації", "Кодекс честі"], correct: 0, time: 25 },
  { question: "Хто тренував Анакіна Скайуокера?", answers: ["Обі-Ван Кенобі", "Йода", "Квай-Ґон Джинн"], correct: 0, time: 25 },
  { question: "Як називається головна база повстанців?", answers: ["Явін-4", "Мустафар", "Джейку"], correct: 0, time: 20 },
  { question: "Який дроїд супроводжує Люка?", answers: ["R2-D2", "C-3PO", "BB-8"], correct: 0, time: 20 },
  { question: "Яка раса є Йода?", answers: ["Невідома", "Вук", "Дагобан"], correct: 0, time: 25 },
  { question: "Як називається перша Зірка Смерті?", answers: ["DS-1", "Exegol", "Naboo Prime"], correct: 0, time: 25 },
  { question: "Хто вбив Сноука?", answers: ["Кайло Рен", "Рей", "Люк"], correct: 0, time: 25 },
  { question: "Яка стихія асоціюється з джедаями?", answers: ["Сила", "Енергія", "Світло"], correct: 0, time: 20 }
],
  lotr: [
  { question: "Справжнє ім’я Ґоллума?", answers: ["Смеаґол", "Дегол", "Фродо"], correct: 0, time: 25 },
  { question: "Хто викував Єдиний Перстень?", answers: ["Саурон", "Елронд", "Саруман"], correct: 0, time: 25 },
  { question: "Яке дерево стоїть у центрі Ґондору?", answers: ["Біле дерево", "Залізне дерево", "Дуб Ентів"], correct: 0, time: 25 },
  { question: "Як звати батька Араґорна?", answers: ["Араторн", "Ісілюр", "Теоден"], correct: 0, time: 20 },
  { question: "Як звали жінку-воїна з Рогану?", answers: ["Еовін", "Арвен", "Ґаладріель"], correct: 0, time: 25 },
  { question: "Яка раса живе у Морії?", answers: ["Гноми", "Орки", "Люди"], correct: 0, time: 20 },
  { question: "Хто зрадив Фродо в печерах Шелоб?", answers: ["Ґоллум", "Сем", "Боромир"], correct: 0, time: 20 },
  { question: "Що зробив Боромир, щоб спокутувати вину?", answers: ["Загинув, захищаючи гобітів", "Віддав перстень", "Знищив трон"], correct: 0, time: 25 },
  { question: "Що таке Назґули?", answers: ["Темні вершники", "Зомбі", "Гобліни"], correct: 0, time: 20 },
  { question: "Що означає слово 'Мордор'?", answers: ["Чорна земля", "Край вогню", "Земля орків"], correct: 0, time: 20 }
],
  narnia: [
    { question: "Як звали Білого чаклуна, яка захопила владу в Нарнії?", answers: ["Джадіс", "Моргана", "Сирієла"], correct: 0, time: 30 },
    { question: "Що символізує Аслан у Нарнії?", answers: ["Хоробрість", "Бога", "Магію"], correct: 1, time: 30 },
    { question: "Який персонаж першим потрапив у Нарнію через шафу?", answers: ["Люсі", "Пітер", "Сьюзен"], correct: 0, time: 25 },
    { question: "Яку їжу Джадіс дала Едмунду?", answers: ["Турецьке задоволення", "Медові калачі", "Пиріг зі сливами"], correct: 0, time: 25 },
    { question: "Який меч отримав Пітер?", answers: ["Рунічний клинок", "Різник", "Андріл"], correct: 1, time: 30 },
    { question: "Хто вбив Білу чаклунку?", answers: ["Аслан", "Пітер", "Едмунд"], correct: 0, time: 30 },
    { question: "Як називалась стара Нарнія під владою Джадіс?", answers: ["Вічна зима", "Темна епоха", "Забуття"], correct: 0, time: 25 },
    { question: "Хто є оповідачем в оригінальній серії К.С. Льюїса?", answers: ["Третя особа", "Аслан", "Люсі"], correct: 0, time: 25 },
    { question: "Який портал був використаний у другій книзі?", answers: ["Картина", "Шафа", "Магічний камінь"], correct: 0, time: 25 },
    { question: "Як звали правителя Тельмаринів?", answers: ["Міраз", "Каспіан", "Тайрон"], correct: 0, time: 30 }
  ],
  darktower: [
    { question: "Як називається головна зброя Роланда?", answers: ["Револьвер", "Меч", "Коса"], correct: 0, time: 30 },
    { question: "Як називається світ, в якому мандрує Роланд?", answers: ["Серединний світ", "Темний край", "Зламана земля"], correct: 0, time: 30 },
    { question: "Хто є Людина в чорному?", answers: ["Волтер", "Марвел", "Курт"], correct: 0, time: 30 },
    { question: "Яку здатність має Темна Вежа?", answers: ["Підтримувати реальність", "Керувати часом", "Знищувати зло"], correct: 0, time: 30 },
    { question: "Хто такий Джейк Чемберс?", answers: ["Хлопчик із Нью-Йорка", "Маг", "Робот"], correct: 0, time: 25 },
    { question: "Що таке Ка?", answers: ["Доля", "Смерть", "Магія"], correct: 0, time: 30 },
    { question: "Яке місто символізує межу між світами?", answers: ["Люд", "Калья", "Мініфікс"], correct: 0, time: 25 },
    { question: "Хто є останнім у своєму роді стрільцем?", answers: ["Роланд", "Сюзанна", "Ален"], correct: 0, time: 25 },
    { question: "Хто такий Рендолф Флегг?", answers: ["Альтер-его Волтера", "Легенда", "Вогненний демон"], correct: 0, time: 30 },
    { question: "Чим закінчується цикл Темної Вежі?", answers: ["Повторенням подорожі", "Загибеллю Вежі", "Спокоєм Роланда"], correct: 0, time: 30 }
  ],
  witcher: [
    { question: "Як звати наставника Геральта?", answers: ["Весемір", "Деклан", "Ламберт"], correct: 0, time: 25 },
    { question: "Що таке 'Знаки' у Відьмака?", answers: ["Магічні жести", "Клейма", "Символи долі"], correct: 0, time: 30 },
    { question: "Хто є Цірі?", answers: ["Принцеса Цінтри", "Сестра Геральта", "Ельфійка"], correct: 0, time: 30 },
    { question: "Який еліксир використовує Геральт найчастіше?", answers: ["Ластівка", "Кривавий місяць", "Гадюка"], correct: 0, time: 25 },
    { question: "Хто створив мутантів-Відьмаків?", answers: ["Маги", "Ельфи", "Королі"], correct: 0, time: 25 },
    { question: "Як називається монета, яку використовують у світі Відьмака?", answers: ["Орен", "Крона", "Флорин"], correct: 0, time: 25 },
    { question: "Хто є заклятим ворогом Геральта?", answers: ["Дикой гін", "Ередін", "Радовід"], correct: 0, time: 30 },
    { question: "Як звуть барда, друга Геральта?", answers: ["Йоаскір", "Данделіон", "Луїс"], correct: 1, time: 25 },
    { question: "Що таке Каер Морхен?", answers: ["Фортеця Відьмаків", "Місто магів", "Ліс ельфів"], correct: 0, time: 25 },
    { question: "Який знак викликає вогонь?", answers: ["Ігні", "Аксій", "Квен"], correct: 0, time: 25 }
  ]
};
let timer, timeLeft;
let currentQuestion = 0;
let currentQuiz = 'harry';
let correctAnswersCount = 0;

function shuffleAnswers(question) {
  const correctAnswer = question.correct;
  const shuffledAnswers = [...question.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }
  const newCorrectIndex = shuffledAnswers.indexOf(question.answers[correctAnswer]);
  return {
    ...question,
    answers: shuffledAnswers,
    correct: newCorrectIndex
  };
}

function showQuestion() {
  const q = questions[currentQuiz][currentQuestion];
  const shuffledQuestion = shuffleAnswers(q);

  const questionElement = document.getElementById('question');
  questionElement.textContent = shuffledQuestion.question;
  questionElement.style.visibility = 'visible'; 

  const answerButtons = document.querySelectorAll('.answer');
  shuffledQuestion.answers.forEach((answer, index) => {
    answerButtons[index].textContent = answer;
  });

  const questionNumberElement = document.getElementById('question-number');
  const totalQuestions = questions[currentQuiz].length;
  questionNumberElement.textContent = `${currentQuestion + 1}/${totalQuestions}`; 

  const quizTitleElement = document.getElementById('quiz-title');
  quizTitleElement.textContent = `Питання: ${currentQuestion + 1}/${totalQuestions}`; 

  const timerElement = document.getElementById('timer');
  timeLeft = shuffledQuestion.time;
  timerElement.textContent = `${timeLeft} сек`;

  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `${timeLeft} сек`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleAnswer(-1, shuffledQuestion.correct); 
    }
  }, 1000);
  document.querySelectorAll('.answer').forEach((btn, idx) => {
    btn.textContent = q.answers[idx];
    btn.disabled = false;
    btn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    btn.onclick = () => {
      clearInterval(timer);
      handleAnswer(idx, q.correct);
    };
  });
}
function handleAnswer(index, correctIndex) {
  const buttons = document.querySelectorAll('.answer');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) btn.style.backgroundColor = '#4CAF50';
    else if (i === index) btn.style.backgroundColor = '#f44336';
  });

  if (index === correctIndex) correctAnswersCount++;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions[currentQuiz].length) {
      showQuestion();  
    } else {
      
      const resultBlock = document.createElement('div');
      resultBlock.classList.add('result-block');
      resultBlock.innerHTML = `
        <h2 class="result-title">Тест завершено!</h2>
        <p class="result-score">Правильних відповідей: ${correctAnswersCount} з ${questions[currentQuiz].length}</p>
        <button class="back-btn" onclick="returnToMain()">Повернутись на головну</button>
      `;
      const quizBackground = document.querySelector('.quiz-background');
      quizBackground.innerHTML = ''; 
      quizBackground.appendChild(resultBlock); 

      document.getElementById('timer').style.display = 'none'; 
    }
  }, 1000);
}
function startQuiz(quizId) {
  currentQuiz = quizId;
  currentQuestion = 0;
  correctAnswersCount = 0;

  document.getElementById('quiz-container').innerHTML = `
    <div class="quiz-background">
      <h2 id="quiz-title">Тест</h2>
      <div id="timer" style="font-weight:bold; font-size: 18px; margin: 10px 0;">00:00</div>
      <div class="quiz-content">
        <div id="question">Питання...</div>
        <div class="answers">
          <button class="answer">Відповідь 1</button>
          <button class="answer">Відповідь 2</button>
          <button class="answer">Відповідь 3</button>
        </div>
      </div>
    </div>
  `;
document.getElementById('main1').style.display = 'none';
document.getElementById('main2').style.display = 'none';
document.getElementById('footer').style.display = 'none';

  document.getElementById('quiz-container').style.display = 'flex';
  showQuestion();
}

function returnToMain() {
  
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('main1').style.display = 'flex';
  document.getElementById('main2').style.display = 'flex';
  document.getElementById('footer').style.display = 'block';
  overlay.style.display = "block";
  overlay.style.opacity = "1";

  if (overlay) {
    overlay.style.display = "block";  
    overlay.style.opacity = "1";
  }
  setTimeout(function() {
    location.reload(); 
  }, 1000); 
}

document.querySelectorAll('.join-btn').forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    startQuiz(button.dataset.quiz);
  });
});
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('quiz-search');
    const quizzes = document.querySelectorAll('.quiz-section');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();

      quizzes.forEach(quiz => {
        const text = quiz.querySelector('.content')?.textContent.toLowerCase();
        if (text && text.includes(query)) {
          quiz.style.display = 'flex';
        } else {
          quiz.style.display = 'none';
        }
      });
    });
  });
