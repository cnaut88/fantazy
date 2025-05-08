let currentScene = 1;

function startScene() {
  document.getElementById('scene').innerHTML = `
    <p><span class="initial">В</span>и стоїте перед Темною вежею. Похмуре небо і тиша навколо. Ви маєте обрати свій шлях.</p>
    <div class="choices">
      <button onclick="scene2()">Наліво — через пустку</button>
      <button onclick="scene3()">Направо — до фортеці</button>
      <button onclick="flipCoin()">Підкинути монету</button>
    </div>
  `;
}

function scene2() {
  currentScene = 2;
  document.getElementById('scene').innerHTML = `
    <p>Ви йдете через пустку. Пісок хрумтить під ногами. Удалині видніється обрій. Ви помічаєте тінь — це людина чи чудовисько?</p>
    <div class="choices">
      <button onclick="scene4()">Підійти ближче</button>
      <button onclick="scene5()">Обійти і рухатись далі</button>
    </div>
  `;
}

function scene3() {
  currentScene = 3;
  document.getElementById('scene').innerHTML = `
    <p>Фортеця стоїть без охорони. Двері відкриті. Всередині темрява і тиша.</p>
    <div class="choices">
      <button onclick="scene4()">Увійти</button>
      <button onclick="scene5()">Повернутися назад</button>
    </div>
  `;
}

function scene4() {
  currentScene = 4;
  document.getElementById('scene').innerHTML = `
    <p>Ви стикаєтесь з чоловіком у чорному. Він дивиться прямо у вашу душу. Він каже: "Час зробити вибір."</p>
    <div class="choices">
      <button onclick="sceneEnding('добрий')">Обрати сторону добра</button>
      <button onclick="sceneEnding('злий')">Обрати темряву</button>
    </div>
  `;
}

function scene5() {
  currentScene = 5;
  document.getElementById('scene').innerHTML = `
    <p>Ви обираєте обережність і прямуєте іншим шляхом. Але чи справді уникнення — це шлях героя?</p>
    <div class="choices">
      <button onclick="scene4()">Повернутися і прийняти виклик</button>
      <button onclick="sceneEnding('нейтральний')">Іти власним шляхом</button>
    </div>
  `;
}

function flipCoin() {
  const result = Math.random() < 0.5 ? 'орел' : 'решка';
  const nextScene = result === 'орел' ? scene2 : scene3;
  alert(`Випала ${result.toUpperCase()}!`);
  nextScene();
}

function sceneEnding(type) {
  let text = '';
  if (type === 'добрий') {
    text = 'Ви боретеся зі злом і захищаєте вежу. Світ врятовано.';
  } else if (type === 'злий') {
    text = 'Ви приєднуєтесь до чоловіка в чорному. Світ поринув у пітьму.';
  } else {
    text = 'Ви зникаєте у тумані пустки, залишаючись легендою без вибору.';
  }

  document.getElementById('scene').innerHTML = `
    <p><span class="initial">К</span>інець глави. ${text}</p>
    <div class="choices">
      <button onclick="startScene()">Почати спочатку</button>
    </div>
  `;
}