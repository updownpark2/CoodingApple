//this 연습

/*const yangsandong = {
  location: "양산동",

  way: function () {
    console.log(this); //여가서의 this는? yangsandong이될것
  },

  toway: function () {
    const two = function () {
      console.log(this); //여기서의 this도 yangsandong
    };
    two();
  },

  gogo: {
    name: "ohoh",
    hoho: function () {
      console.log(this); //여기서의 this는 yangsandong.gogo가 될것
    },
  },
};

yangsandong.way();
yangsandong.toway();
yangsandong.gogo.hoho();*/

/*function test() {
  console.log(this);
}
test();

console.log(this); //전역객체가 나옴
// 사실 JS는 Window라는 전역객체로 둘러싸여있음
//그래서 일반 함수, console.log(this)를 찍을 경우 window.일반함수
//window.console.log(this)랑 같은 말이 된다.*/

//함수는 오브젝트를 생산하는 틀이 될 수 있다. 아래를 통해 설명하겠다.

/* function Machine({ name, age, condition, location }) {
  this.name = name;
  this.age = age;
  this.condition = condition;
  this.location = location;
  console.log(this);
}
const machine = new Machine({
  name: "sangha",
  age: 25,
  condition: "good",
  location: "yangsandong",
});

console.log(machine.name);
console.log(machine.age);
console.log(machine.condition);
console.log(machine.location);*/

//addeventlistener 에서의 this

/*const Button = document.querySelector("button");

Button.addEventListener("click", function (e) {
  console.log(this); // => e.currenttarget이됨
  //즉 이벤트가 동작하고 있는 곳을 가르킨다.
  //e.target 이렇게 써도 되지만 this 이렇게 써도 된다.
});*/
