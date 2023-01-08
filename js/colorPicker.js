const form = document.getElementById("color-form");
const updateButton = document.getElementById("update-button");

const BgColor = document.getElementById("color-result");
const PreBgColor = document.getElementById("prev-color-result");

updateButton.addEventListener("click", (event) => {
  event.preventDefault();

  const red = document.getElementById("red").value;
  const green = document.getElementById("green").value;
  const blue = document.getElementById("blue").value;
  const selectedColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(selectedColor);

  BgColor.style.backgroundColor = `${selectedColor}`;
  BgColor.innerHTML = `${selectedColor}`;
  PreBgColor.innerHTML += `
  <li style='background-color:${selectedColor}' class="list-group-item">${selectedColor}</li>
  `;
});
