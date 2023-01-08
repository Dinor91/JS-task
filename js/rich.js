//HTML elements catch
let cardsContainer = document.getElementById("cards-container");

//Map function on richArr array
richArr.map(
  (person) =>
    (cardsContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${person.image}" class="card-img-top" alt="${person.name}">
        <div class="card-body">
          <h5 class="card-title">${person.name}</h5>
          <p class="card-text">His fortune is estimated at ${person.worth} and mainly comes from ${person.source}.</p>
          <button  href="#" id="${person.id}" class="remove btn btn-primary">Remove me from the list</button>
        </div>
      </div>`)
);

addEventToCard();

//Filter function on richArr array by event click
function removeCard(event) {
  richArr = richArr.filter((person) => person.id !== event.target.id);
  renderPage(richArr);
}

//Create the card before present at HTML
function createCard(person) {
  let res = `<div class="card" style="width: 18rem;">
  <img src="${person.image}" class="card-img-top" alt="${person.name}">
  <div class="card-body">
    <h5 class="card-title">${person.name}</h5>
    <p class="card-text">His fortune is estimated at ${person.worth} and mainly comes from ${person.source}.</p>
    <button  href="#" id="${person.id}" class="remove btn btn-primary">Remove me from the list</button>
  </div>
</div>`;

  return res;
}

//Render page after clicking the "remove" button
function renderPage(richArr) {
  let html = "";

  for (let person of richArr) {
    const string = createCard(person);
    html += string;
  }

  cardsContainer.innerHTML = html;
  addEventToCard();
}

//connect Event 'click' to "remove me from the list" button
function addEventToCard() {
  let btnRemove = document.querySelectorAll(".remove");

  for (let key of btnRemove) {
    key.addEventListener("click", removeCard);
  }
}
