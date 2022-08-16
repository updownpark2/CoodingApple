export default function Todolistresult({ $target, data }) {
  const resultbox = document.createElement("div");

  this.render = function () {
    $target.appendChild(resultbox);
    resultbox.innerHTML = `<ul>

${this.data
  .map(function (item) {
    return `<li>${item}</li>`;
  })
  .join("")}
</ul>`;
  };

  this.setState = function (newdata) {
    this.data = newdata;
    this.render();
  };
}
