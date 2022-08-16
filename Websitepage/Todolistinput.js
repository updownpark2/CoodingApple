export default function Todolistinput({ $target, onSubmit }) {
  const formbox = document.createElement("div");

  this.render = function () {
    $target.appendChild(formbox);
    formbox.innerHTML = `<form><input placeholder="해야할일!"></input><button>입력!</button></form> `;
  };
  this.render();

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputvalue = e.target[0].value;
    e.target[0].value = "";
    onSubmit(inputvalue);
  });
}
