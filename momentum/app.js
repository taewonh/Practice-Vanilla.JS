//#################################################
// 1. Variables
console.log("---------- 1. Variables ----------");
const a = 5;
const b = 2;
let myName = "taewon";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);
myName = "seungyeon";
console.log("hello " + myName);
/**
 * const(상수, 변화 불가능)
 * let(변수, 변화 가능)
 * var(변수, 변화 가능, 사용X)
 */

//#################################################
// 2. null, undefiend
console.log("---------- 2. null, undefined ----------");
const amIFat = null;
let something; //undefined
/**
 * 선언한 변수가 초기화되지 않은 상태. 
 * null은 변수안에 아무런 값이 없다는 것을 확실히하기 위해 사용.
 */
console.log(amIFat);
console.log(something);

//#################################################
// 3. List
console.log("---------- 3. List ----------");
const daysOfWeek = ["월","화","수","목","금","토"];
const nonsense = [1,2,"hello",false,null,undefined,"taewon"]
console.log(daysOfWeek, nonsense);
// Get Item from Array
console.log(daysOfWeek[0]);
// Add one more day to the array
daysOfWeek.push("일");
console.log(daysOfWeek);
daysOfWeek.pop();
console.log(daysOfWeek);

//#################################################
// 4. Object
console.log("---------- 4. Object ----------");
const player = {
    name: "taewon",
    points: 121212,
    isHandsome: true,
    isFat: false
}
console.log(player);
console.log(player.name);
/**
 * 자료형이 const라고 하더라도
 * object 내부 자료 변경은 가능하다.
 * player 자체 값 변경은 불가능하다.
 */
player["name"] = "seungyeon";
console.log(player["name"], player.name);

/**
 * object에 없는 property 삽입 역시 가능하다.
 */
player.age = 27;
console.log(player);

//#################################################
// 5. Function
console.log("---------- 5. Function ----------");
function sayHello(name, age) {
    console.log("Hello! My name is " + name +", and I'm " + age);
}
sayHello("Taewon", 29);
sayHello("Seungyeon", 27);
sayHello("Lotto", 7);
sayHello("Doorie", 7);
sayHello("monster"); //monster undefined

// function in object
const practiceCalculator = {
    plus: function(a, b) {
        console.log(a + b);
    }
}
practiceCalculator.plus(); // NaN : Not of Number
practiceCalculator.plus(1,2); //3

//#################################################
//6. Returns
console.log("---------- 6. Returns ----------");

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
}
const plus = calculator.plus(1,2);
const minus = calculator.minus(4,3);
const times = calculator.times(3,3);
const divide = calculator.divide(6,3);
const power = calculator.power(2,4);
console.log("plus : " + plus);
console.log("minus : " + minus);
console.log("times : " + times);
console.log("divide : " + divide);
console.log("power : " + power);

//#################################################
//7. Conditionals

//prompt function 호출 시 화면상에서 사용자에게 값을 입력받는다.
const stringAge = prompt("How old are you?");

//입력받은 값을 할당받은 변수의 타입을 확인할 수 있다 (typeof variable)
const stringAgeType = typeof stringAge;
console.log(stringAge, stringAgeType);

/**
 * 변수의 타입을 변경한다. (string -> int)
 * 
 * 만약 타입을 변경하려는 변수가 숫자형태가 아니라면,
 * 변환은 되지만 NaN으로 출력
 */
const intAge = parseInt(stringAge);
const intAgeType = typeof intAge;
console.log(intAge, intAgeType);
//isNan(variable)으로 NaN 여부 확인 가능.
console.log("intAge: isNan ? " + isNaN(intAge));
if (isNaN(intAge)) {
    console.log("Please input a number");
} else if (intAge < 18) {
    console.log("You can't drink. You are too young.");
} else if(intAge >= 18 && intAge <= 50) {
    console.log("You can drink");
} else {
    console.log("You can drink. But recommend not drink");
}












