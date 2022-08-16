//버튼 누르면 localstorage에 추가되는

function test() {
  const boxbox = document.createElement("div");
  const box = document.querySelector("#box");
  box.appendChild(boxbox);
  boxbox.innerHTML = `<form><input placeholder="찾아보세요"></input><button>입력</button></form>`;
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputvalue = e.target[0].value;
    console.log(inputvalue);
    e.target[0].value = "";
    localStorage.setItem("submit", []);
    localStorage.getItem("submit").push(inputvalue);
    console.log(localStorage.getItem("submit"));
  });
}
test();
