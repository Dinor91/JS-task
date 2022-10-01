const inputNumber = document.getElementById("input-number");
const btnAddNum = document.getElementById("btn-add-num");
const btnAddArr = document.getElementById("btn-add-array");
const btnRandomArr = document.getElementById("btn-random-array");
const showArr = document.getElementById("show-array");

let arrayOfNum = [];
let arrayOfArr = [];

btnAddNum.addEventListener("click", addNumToArray);
btnAddArr.addEventListener("click", addArrayToArray);
btnRandomArr.addEventListener("click", createRandomArr);

function addNumToArray() {
  arrayOfNum.push(inputNumber.value);
  inputNumber.value = "";
}

function addArrayToArray() {
  sort(arrayOfNum);
  arrayOfArr.push(arrayOfNum);
  render();
  arrayOfArr = [];
  arrayOfNum = [];
}

function sort(array) {
  for (var i = 1; i < array.length; i++)
    for (var j = 0; j < i; j++)
      if (array[i] < array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }

  return array;
}

function createRandomArr() {
  let randomArr = new Array(3);
  randomArr = randomArr.fill(0).map((x) => Math.floor(Math.random() * 100));
  sort(randomArr);
  arrayOfArr.push(randomArr);
  render();
  arrayOfArr = [];
}

function render() {
  showArr.innerHTML += `[${arrayOfArr}]</br>`;
}
