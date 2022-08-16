import Header from "./Header.js";
import Corona from "./Corona.js";
import Todolistinput from "./Todolistinput.js";
import Todolistresult from "./Todolistresult.js";
export default function App({ $target }) {
  if (localStorage.getItem("todolist") === null) {
    // localstorage.getitem ===null 인경우 JSON하면 오류가 발생한다.
    this.data = [];
  } else {
    this.data = JSON.parse(localStorage.getItem("todolist"));
  }

  this.setState = (newdata) => {
    this.data = newdata;
    localStorage.setItem("todolist", JSON.stringify(this.data));
    console.log(this.data);
    todolistresult.setState(this.data);
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

  const todolistinput = new Todolistinput({
    $target,
    data: this.data,
    onSubmit: (inputvalue) => {
      this.setState([...this.data, inputvalue]);
    },
  });

  const todolistresult = new Todolistresult({
    $target,
    onRemove: (LIID) => {
      const newdata = this.data.filter(function (item, index) {
        return index != LIID * 1;
      });
      this.setState(newdata);
    },
    data: this.data,
  });

  const corona = new Corona({ $target });
  //const todolistresult = new Todolistresult({ $target, data: this.data });
}
