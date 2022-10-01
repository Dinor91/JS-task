//HTML elements catch
let cardsContainer = document.getElementById("cards-container");

//Map function on richPeoples array
richPeoples.map(
  (richPeople) =>
    (cardsContainer.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${richPeople.image}" class="card-img-top" alt="${richPeople.name}">
        <div class="card-body">
          <h5 class="card-title">${richPeople.name}</h5>
          <p class="card-text">His fortune is estimated at ${richPeople.worth} and mainly comes from ${richPeople.source}.</p>
          <button  href="#" id="${richPeople.id}" class="remove btn btn-primary">Remove me from the list</button>
        </div>
      </div>`)
);

addEventToElement();

//Filter function on richPeoples array by event click
function removeCard(event) {
  richPeoples = richPeoples.filter(
    (richPeople) => richPeople.id !== event.target.id
  );
  renderPage(richPeoples);
}

//Create the card before present at HTML
function createCard(richPeople) {
  let res = `<div class="card" style="width: 18rem;">
  <img src="${richPeople.image}" class="card-img-top" alt="${richPeople.name}">
  <div class="card-body">
    <h5 class="card-title">${richPeople.name}</h5>
    <p class="card-text">His fortune is estimated at ${richPeople.worth} and mainly comes from ${richPeople.source}.</p>
    <button  href="#" id="${richPeople.id}" class="remove btn btn-primary">Remove me from the list</button>
  </div>
</div>`;

  return res;
}

//Render page after clicking the "remove" button
function renderPage(richPeoples) {
  let html = "";

  for (let richPeople of richPeoples) {
    const str = createCard(richPeople);
  }

  cardsContainer.innerHTML = html;
  addEventToElement();
}

//connect Event 'click' to "remove me from the list" button
function addEventToElement() {
  let btnRemove = document.querySelectorAll(".remove");

  for (let key of btnRemove) {
    key.addEventListener("click", removeCard);
  }
}
