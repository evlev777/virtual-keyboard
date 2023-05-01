import virtualKeyBoardHTML from './assets/virtual-keyboard.js'


let lang = "en";
let mode = "normal";

const en = {
    lang: "en",
    normal: [
      "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
      "tab q w e r t y u i o p [ ] \\",
      "caps a s d f g h j k l ; , enter",
      "shift z x c v b n m , . / ᐃ shift",
      "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
    ],
    shift: [
      "Esc ! @ # $ % ^ & * ( ) _ + bksp",
      "tab Q W E R T Y U I O P { } |",
      'caps A S D F G H J K L : " enter',
      "shift Z X C V B N M < > ? ᐃ shift",
      "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
    ],
    caps: [
      "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
      "tab Q W E R T Y U I O P [ ] \\",
      "caps A S D F G H J K L ; , enter",
      "shift Z X C V B N M , . / ᐃ shift",
      "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
    ],
    capsOnShift: [
      "Esc ! @ # $ % ^ & * ( ) _ + bksp",
      "tab q w e r t y u i o p { } |",
      'caps a s d f g h j k l : " enter',
      "shift z x c v b n m < > ? ᐃ shift",
      "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
    ],
  };
  const ru = {
    lang: "ru",
    normal: [
      "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
      "tab й ц у к е н г ш щ з х ъ \\",
      "caps ф ы в а п р о л д ж э enter",
      "shift я ч с м и т ь б ю . ᐃ shift",
      "ctrl alt ё space ru alt ᐊ ᐁ ᐅ del",
    ],
    shift: [
      'Esc ! " № ; % : ? * ( ) _ + bksp',
      "tab Й Ц У К Е Н Г Ш Щ З Х Ъ /",
      "caps Ф Ы В А П Р О Л Д Ж Э enter",
      "shift Я Ч С М И Т Ь Б Ю , ᐃ shift",
      "ctrl alt Ё space ru alt ᐊ ᐁ ᐅ del",
    ],
    caps: [
      "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
      "tab Й Ц У К Е Н Г Ш Щ З Х Ъ \\",
      "caps Ф Ы В А П Р О Л Д Ж Э enter",
      "shift Я Ч С М И Т Ь Б Ю . ᐃ shift",
      "ctrl alt Ё space ru alt ᐊ ᐁ ᐅ del",
    ],
    capsOnShift: [
      'Esc ! " № ; % : ? * ( ) _ + bksp',
      "tab й ц у к е н г ш щ з х ъ /",
      "caps ф ы в а п р о л д ж э enter",
      "shift я ч с м и т ь б ю , ᐃ shift",
      "ctrl alt ё space ru alt ᐊ ᐁ ᐅ del",
    ],
  };

  const virtualKeyboard = document.getElementById("virtual__keyboard");
  virtualKeyboard.insertAdjacentHTML("afterbegin", virtualKeyBoardHTML);
  
  const currentLangObj = (lang) => {
    return lang === "en" ? en : ru;
  };
  
function createKeyboard(lang, mode) {
    let rowArr = document.querySelectorAll(".row");
    let currObj = currentLangObj(lang);
    currObj[mode].forEach((el, ind) => {
      let symbolArr = el.split(" ");
      for (let i = 0; i < symbolArr.length; i++) {
        rowArr[ind].children[i].firstElementChild.setAttribute(
          "data-content",
          symbolArr[i]
        );
        rowArr[ind].children[i].firstElementChild.innerHTML = symbolArr[i];
      }
    });
  }
  
  function mouseClickDown(event) {
    const key = event.target.closest(".key");
    if (!key) return;
    key.classList.add("active");
  }
  
  function mouseClickUp(event) {
    const key = event.target.closest(".key");
    if (!key) return;
    key.classList.remove("active");
  }
  
  function mouseClickKey(event) {

    const key = event.target.closest(".key");
    if (!key) return;
    focusArea();
    let cursor = textarea.selectionStart;
  
    if (/Escape|CapsLock|Shift|Control|Alt|Lang/.test(key.dataset.code)) {
      return;
    }
  
    if (/Backspace/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor - 1) + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor - 1, cursor - 1);
      return;
    }
  
    if (/Delete/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + textarea.value.slice(cursor + 1);
      textarea.setSelectionRange(cursor, cursor);
      return;
    }
  
    if (/Enter/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + "\n" + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }
  
    if (/Space/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + " " + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }
  
    if (/Tab/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + "\t" + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }
  
    textarea.value =
      textarea.value.slice(0, cursor) +
      key.firstElementChild.dataset.content +
      textarea.value.slice(cursor);
    textarea.setSelectionRange(cursor + 1, cursor + 1);
  }
  
  function handClickDown(event) {
    focusArea();
    console.log(event);
    const curr = event;
    document.querySelector(`[data-code="${curr.code}"]`).classList.add("active");
    if (curr.code === "Tab") {
      curr.preventDefault();
    }
    if (curr.key === "Alt") {
      curr.preventDefault();
    }
  }

  function handClickUp(event) {
    focusArea();
    const curr = event;
    document
      .querySelector(`[data-code="${curr.code}"]`)
      .classList.remove("active");
  }
  
  
  function focusArea() {
    const textarea = document.querySelector(".display");
    textarea.focus();
  }
  
  const keyboard = document.querySelector(".keys");
  keyboard.addEventListener("mousedown", mouseClickDown);
  keyboard.addEventListener("mouseup", mouseClickUp);
  keyboard.addEventListener("click", mouseClickKey);
  document.addEventListener("keydown", handClickDown);
  document.addEventListener("keyup", handClickUp);
  
  createKeyboard(lang, mode);

  const textarea = document.querySelector(".display");
  textarea.focus();

  