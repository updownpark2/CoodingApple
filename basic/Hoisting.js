//Hoisting이란 변수 선언을 변수 범위 맨 위로 끌고오는 현상!
//함수 선언도 Hoisting도 일어난다!!
//ex
function name() {
  const name = "kim";
}
console.log("haha");

const age = 25;
//이러한 코드가 있을 때 const age는 맨위로 올라감 즉, 변수 선언이 제일 위로 올라감!

//또 다른 경우에

console.log(JJ);
const JJ = "kim";
console.log(JJ);

//result => undefined   : 변수 선언은 됐으나 그 값을 찾지 못해서 undefined가 나온다
//          "kim"

// XXXXXX 왜냐면 Hoisting이 일어났을 때 값을 undefind로 지정해주는건
//var 뿐이다. let과 const 는 오류를 발생시킨다.

//*전역변수 -> 모든곳에서 쓸 수 있는 변수
//window.이름="hasang" 이런식으로 전역변수를 만들수도있다.
//이렇게 더 많이 쓰인다
//window.이름 ===var.이름이다.

function arr() {
  console.log("asdasd");
}
arr();
window.name = "sangha";
console.log(window.name);

//Q1
함수();
function 함수() {
  console.log(안녕);
  let 안녕 = "Hello!";
}
//결과 -> 함수 선언이 제일 위로 올라가서
function 함수() {
  console.log(안녕);
  let 안녕 = "Hello!";
}
함수(); //이 순서가 될 것이고 let 안녕의
//변수 선언이 함수() 내에서 가장 위로올라가서
console.log(안녕); //의 값은 undefined가 나올것이다.

//->해설 : 에러가 나옴 let const는 에러가 나버림 undefinded로 나오는건
// var 뿐이다. let const 는 hoisting이 일어나지만 할당이 되지않아서 오류가나옴
//var 안녕 ;  let 안녕 이런차이

//Q2
함수();
var 함수 = function () {
  console.log(안녕);
  var 안녕 = "Hello";
};
//이것도 변수선언이 제일 위로 올라가서
//결과값은 위와 동일할 것이다. undefined

//해설 -> 변수의 선언 부분만 Hoisting이 일어남!

// var 함수;
//함수()
//즉 에러가 발생함 함수가 아니라고 분석한다!

//Q3
let a = 1;
var 함수 = function () {
  a = 2;
};
console.log(a);
//변수는 지역변수와 전역변수가 있는데 a=2 는 지역변수로
//함수안에서만 사용할 수 있다. 그럼으로 결과값은 1

//-> 해설 함수를 실행해주면 console.log(a)=>2 가 나온다!
//Q4
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;
console.log(a + b);

//let과 var 은 재할당이 가능함으로
//재할당된 각각 3, 4 를 더한 7이 출력될 것이다.

//->해설 var b ===window.b 는 같다 그러므로 재할당이 가능
// let a가 window.a보다 가깝기 때문에 a는 그대로 1 이된다.
//즉 결과값은 5가나온다!

for (var i = 1; i < 5; i++) {
  //반복문은 0.1초만에 다돌아요
  //그러면 이제 var i = 5 가됨
  setTimeout(function () {
    console.log(i); //i가 {}밖에 선언되어서 그런가??
  }, i * 1000);
} //답은 let으로 바꾸기

for (let i = 1; i < 5; i++) {
  //반복문은 0.1초만에 다돌아요
  //그러면 이제 var i = 5 가됨
  setTimeout(function () {
    console.log(i); //i가 {}밖에 선언되어서 그런가??
  }, i * 1000);
}
//i가 1 ,2, 3, 4, 5 초 후에 실행 된다고 일단 미뤄놓는다.
// SetTimeout이 먼저 실행되기 때문에 안에 있는 console.log()는 제쳐두게되고
//i의 값을 1초후 2초후 3초후 각각 부르는데 이미 i 는 반복문을 다돌아
//var i = 5로 기억되어 5를 5번출력하게 된다.
