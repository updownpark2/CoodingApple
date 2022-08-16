export default function Header({ $target, Time }) {
  const HDbox = document.createElement("div");
  $target.appendChild(HDbox);
  Time(HDbox);
}
