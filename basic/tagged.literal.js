//tagged literal

const 변수 = `손흥민`;
const 문자 = `안녕하세요 ${변수}입니다`;

function 해체분석기(a, b) {
  console.log(a);
  console.log(b);
}
해체분석기`안녕하세요 ${변수}입니다`;
//이렇게 사용하면 변수와 string을 분리가 가능하다.
//return => ["안녕하세요","입니다"]
//           손흥민

const 변수 = `손흥민`;
const 문자 = `안녕하세요 ${변수}입니다 ${변수}`;

function 해체분석기(a, b, c) {
  console.log(a[0] + a[1]);
  console.log(b);
  console.log(b + c);
}
해체분석기`안녕하세요 ${변수}입니다 ${변수}`;
//return => 안녕하세요 ㅇ비니다
// 손흥민
// 손흥민손흥민

//Q1 단어 순서를 바꾸는 해체분석기 제작하기
var pants = 20;
var socks = 100;
function haechae(a, b, c) {
  console.log(a[1] + b + a[0] + c);
}
haechae`바지${pants}양말${socks}`;

//Q2 바지가 0개면 "바지다팔렸어요"라는 문자를 대신 표시

var pants = 0;
var socks = 100;
function hae(a, b, c) {
  if (b === 0) {
    console.log(a[0] + `다팔렸어요` + a[1] + c);
  } else {
    console.log(a[0] + b + a[1] + c);
  }
}
hae`바지${pants}양말${socks}`;
