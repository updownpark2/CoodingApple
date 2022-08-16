export default function Corona({ $target }) {
  this.paint = function (topaint) {
    const paintbox = document.createElement("div");
    $target.appendChild(paintbox);
    paintbox.innerHTML = `<ul><li>기준일:${topaint.S_DT}</li>  <li>오늘 서울 확진자: ${topaint.SN_HJ}명</li> <li>오늘 전국 확진자: ${topaint.N_HJ}명</li> <li>누적 전국 확진자: ${topaint.T_HJ}명</li></ul>`;
  };

  fetch(
    "http://openapi.seoul.go.kr:8088/5357534a76746b643239415a687673/json/TbCorona19CountStatus/1/1"
  )
    .then((data) => data.json())
    .then((r) => (this.data = r.TbCorona19CountStatus.row[0]))
    .then(() => this.paint(this.data));
}
