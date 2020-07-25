const table = document.querySelector("table");
const td = document.querySelectorAll("td");
const modal = document.querySelector(".modal");
const p = document.querySelector("p");
const button = document.querySelector("button");
let element = "X";
let ids = [];

td.forEach((td) => {
  td.addEventListener("click", click, { once: true });

  td.addEventListener("mouseenter", function () {
    if (!this.textContent) {
      this.style.color = "lightgrey";
      this.textContent = element;
    }
  });
  td.addEventListener("mouseout", out);
});

function click() {
  ids = [""];
  element === "Y" ? (this.style.color = "black") : (this.style.color = "red");
  this.textContent = element;
  this.removeEventListener("mouseout", out);
  for (i = 1; i < 10; i++)
    ids.push(document.getElementById("" + i).textContent);
  check();
  element === "Y" ? (element = "X") : (element = "Y");
}

function out() {
  this.textContent = "";
}

function check() {
  if (
    (ids[1] === ids[2] && ids[2] === ids[3] && ids[1] !== "") ||
    (ids[1] === ids[4] && ids[4] === ids[7] && ids[1] !== "") ||
    (ids[1] === ids[5] && ids[5] === ids[9] && ids[1] !== "") ||
    (ids[2] === ids[5] && ids[5] === ids[8] && ids[2] !== "") ||
    (ids[3] === ids[5] && ids[5] === ids[7] && ids[3] !== "") ||
    (ids[3] === ids[6] && ids[6] === ids[9] && ids[3] !== "") ||
    (ids[4] === ids[5] && ids[5] === ids[6] && ids[4] !== "") ||
    (ids[7] === ids[8] && ids[8] === ids[9] && ids[7] !== "")
  ) {
    modal.style.height = "100%";
    p.textContent = element + " Is The Winner";
    button.style.height = "100px";
    table.style.marginTop = 0;
    table.style.pointerEvents = "none";
    document.body.append(table.cloneNode(true));
    return;
  }
  if (ids.filter((el) => el === "").length === 1) {
    modal.style.height = "100%";
    p.textContent = "DRAW";
    button.style.height = "100px";
    table.style.marginTop = 0;
    table.style.pointerEvents = "none";
    document.body.append(table.cloneNode(true));
    return;
  }
}

button.addEventListener("click", () => location.reload());
