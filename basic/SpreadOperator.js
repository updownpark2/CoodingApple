//모든 괄호를 없애주는 Spread Operator
const arr = ["hello", "world"];

console.log(...arr);
// hello world
const literal = "hello";
console.log(...literal);
// h e l l o
//하나씩 해체해준다. "h" "e" "l" "l" "o"
//+ 문자도 array처럼 index이 가능하다.

console.log(literal[2]); // l

const a = [1, 2, 3];
const b = [4, 5];
const c = [...a]; //[1,2,3]
const d = [...a, ...b]; //[1,2,3,4,5]
console.log(d);

const A = [1, 2, 3];
const B = A;
const C = [...A];
A[3] = 4;

console.log(A);
console.log(B);
//이렇게 부등호로 A와 B를 연결해버리면 추가된 값이 B에도 영향을 미침
//그렇지 않게하기 위해

A[4] = 5;
console.log(C); //추가된 A[4]에 영향을 받지않는다.
//독립적인 Copy

const Ob1 = { a: 1, b: 2 };
const Ob2 = { c: 3, d: 4 };

const Ob3 = { ...Ob1, ...Ob2 };
console.log(Ob3);
//이렇게 {}괄호도 없애준다.
//이게 바로 Spread Operator

//파라미터에 넣을 때도 많이 사용한다

const arr2 = [3, 4, 5];
function plus(a, b, c) {
  console.log(a + b + c);
}
plus(...arr2);
