export default function Todolistresult({ $target, data, onRemove }) {
  this.data = data;

  const resultbox = document.createElement("div");

  this.render = function () {
    $target.appendChild(resultbox);
    resultbox.innerHTML = `<ul>
${this.data
  .map(function (item, index) {
    return `<li id=${index}>${item}<button class="BTN">🖍</button></li>`;
  })
  .join("")}
</ul>`;
  };
  this.render();

  this.setState = (newdata) => {
    this.data = newdata;
    this.render();
  };

  resultbox.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const LIID = e.target.parentElement.id;
      onRemove(LIID);
    }
  });
  //button을 받아서 add처리해서 해당 li의 id와 filter의 인덱스가 같으면 제외시켜버린다.
  //그리고 그 배열을 다시 setState처리하면된다!
}
