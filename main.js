//? Selecting Theme  //
//?------------------//

const range = document.getElementById("RangeTheme");
const body = document.body;

range.addEventListener("change", () => {
  storage(range.value);
  load();
});

const load = () => {
  const storage = localStorage.getItem("BodyTheme");

  if (storage == "1" || storage == "2" || storage == "3") {
    if (storage == "1") {
      body.classList.remove("theme-2", "theme-3");
      body.classList.add("theme-1");
    } else if (storage == "2") {
      body.classList.remove("theme-1", "theme-3");
      body.classList.add("theme-2");
    } else if (storage == "3") {
      body.classList.remove("theme-2", "theme-1");
      body.classList.add("theme-3");
    }
  } else body.classList.add("theme-1");

  range.value = storage
};

const storage = (value) => {
  localStorage.setItem("BodyTheme", value);
};
load();

//?----Calculator  //
//?------------------//

const controls = document.querySelectorAll(".control");
const display = document.getElementById("display");
const btnReset = document.getElementById("reset");
const btnDel = document.getElementById('del')
const btnEqual = document.getElementById("equal");


btnDel.addEventListener('click', ()=> {
  let str = display.innerText
  display.innerText = str.substring(0, str.length - 1)
})

btnReset.addEventListener('click', ()=> {
  display.innerHTML = '';
})

btnEqual.addEventListener('click', ()=> {
  display.innerText = eval(display.innerText)
})

controls.forEach((control) => {
  control.addEventListener("click", () => {
    if (control.dataset.type !== "number" && control.dataset.type !== "symbol")
      return;
    display.innerHTML += control.innerHTML;
  });
});
