import Header from "./Header.js";
import Corona from "./Corona.js";
import Todolistinput from "./Todolistinput.js";
import Todolistresult from "./Todolistresult.js";
export default function App({ $target }) {
  this.data = null ? [] : JSON.parse(localStorage.getItem("todolist")); //처음로딩할때
  this.setState = function (newdata) {
    this.data = newdata;
    localStorage.setItem("todolist", JSON.stringify(this.data));
    console.log(this.data);
    todolistresult.set;
  };

  const header = new Header({
    $target,
    Time: (HDbox) => {
      setInterval(() => {
        let date = new Date();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        let hour = String(date.getHours()).padStart(2, "0");
        let minutes = String(date.getMinutes()).padStart(2, "0");
        let seconds = String(date.getSeconds()).padStart(2, "0");
        HDbox.innerHTML = `<h1>YSD!!</h1><span>${month}월 ${day}일 ${hour}:${minutes}:${seconds}</span>`;
      }, 1000);
    },
  });

  const corona = new Corona({ $target });

  const todolistinput = new Todolistinput({
    $target,
    onSubmit: (inputvalue) => {
      this.setState([...this.data, inputvalue]);
    },
  });
}
