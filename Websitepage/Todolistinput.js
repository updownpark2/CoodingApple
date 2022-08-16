export default function Todolistinput({ $target, data, onSubmit }) {
  const Todobox = document.createElement("div");

  this.render = () => {
    $target.appendChild(Todobox);
    Todobox.innerHTML = `<form><input placeholder="Have To Do~"><button>제출</button></input></form>`;
  };
  this.render();

  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.dir(e.target[0].value);
    let inputvalue = e.target[0].value;
    e.target[0].value = "";
    onSubmit(inputvalue);
  });
}
