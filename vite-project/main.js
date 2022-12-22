import "./list";

const menuDiv = document.querySelector("#menu");
display(menu);

document.querySelector("#all").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  display(menu);
});
document.querySelector("#beef").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "beef");
  display(filtered);
});
document.querySelector("#chicken").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "chicken");
  display(filtered);
});
document.querySelector("#vegetarian").addEventListener("click", function () {
  menuDiv.innerHTML = "";
  const filtered = menu.filter((item) => item.meat === "none");
  display(filtered);
});

document.querySelector("#theme-button").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

function display(array) {
  array.forEach((item) => {
    if (item.sales.includes(day)) item.price = item.price / 2;
    menuDiv.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-object">
                <h2>${item.name}</h2>
                <img class="menu-image" src="${item.image}">
                <p class="menu-object-price">$${item.price}</p>
                <p class="menu-object-text">${item.description}</p>
            </div>`
    );
    if (item.sales.includes(day)) item.price = item.price * 2;
  });
}
