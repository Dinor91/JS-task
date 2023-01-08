const inputNumber = document.getElementById("input-number");
const btnAddNum = document.getElementById("btn-add-num");
const btnAddArr = document.getElementById("btn-add-array");
const btnRandomArr = document.getElementById("btn-random-array");
const showArr = document.getElementById("show-array");
const showNum = document.getElementById("show-numbers");

btnAddNum.addEventListener("click", pushNumber);
btnAddArr.addEventListener("click", createArray);
btnRandomArr.addEventListener("click", createRandomArr);

let addNumbers = [];
let arrays = [];

function pushNumber() {
  if (inputNumber.value === "") {
    showNum.innerHTML = "Please insert a number!";
    return;
  }

  addNumbers.push(Number(inputNumber.value));
  showNum.innerHTML = `[${addNumbers}]</br>`;
  inputNumber.value = "";
}

function createArray() {
  if (addNumbers.length === 0) {
    showNum.innerHTML = "Array is empty! please push a number first";
    return;
  }

  addNumbers = sort(addNumbers);
  arrays.push(addNumbers);
  addNumbers = [];
  render();
  clearInput();
}

function createRandomArr() {
  if (inputNumber.value === "") {
    showNum.innerHTML = "Insert the number of the items in your Random Array";
    return;
  }

  let randomArr = new Array(Number(inputNumber.value));
  randomArr = randomArr.fill(0).map((x) => Math.floor(Math.random() * 100));

  arrays.push(sort(randomArr));
  render();
  clearInput();
}

sort = (array) => {
  for (var i = 1; i < array.length; i++)
    for (var j = 0; j < i; j++)
      if (array[i] < array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }

  return array;
};

render = () => {
  showArr.innerHTML += `[${arrays}]</br>`;
  showNum.innerHTML = "";
  inputNumber.value = "";
  arrays = [];
};
