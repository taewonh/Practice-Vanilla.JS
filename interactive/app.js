/**
 * 1. The Document Object
 * 
 * document 객체를 사용하면 HTML로 접근할 수 있다.
 * document는 브라우저가 제공해주는 객체이며,
 * HTML이 가지고 있는 Object를 컨트롤할 수 있다.
 * (ex. document.title -> Interactive)
 */

const title = document.getElementById("title");
console.log(title);
console.dir(title);

/**
 * 2. HTML in Javascript
 * document 객체를 이용하여 가져온 태그의 내용(HTML)을
 * 자바스크립트로 변경할 수 있다.
 */
title.innerText = "Got you!";
console.log("title's inner text change 'Got you!'");

/**
 * 3. Searching For Elements
 */
//className이 같은 여러개의 태그를 가져온다. (배열 형식)
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

/**
 * QuerySelector: CSS와 비슷한 방식으로 사용가능.
 * document.querySelector: 일치하는 조건 중 첫번째 자식만 가져옴.
 * document.querySelector: 일치하는 조건의 모든 자식을 가져옴.
 */
//class name이 selectDiv인 태그의 자식들 중 h1 태그의 첫번째 자식을 가져온다.
const firstH1 = document.querySelector(".selectDiv h1");
console.log("first H1 Tag", firstH1);

//class name이 selectDiv인 태그의 자식들 중 h1 태그인 모든 자식을 가져온다.
const allH1 = document.querySelectorAll(".selectDiv h1");
console.log("all H1 Tag", allH1);

//class name이 selectDiv인 태그의 자식들 중 h2 태그의 첫번째 자식을 가져온다.
const firstH2 = document.querySelector(".selectDiv h2");
console.log("first H2 Tag", firstH2);

/**
 * 4. Events
 * document 객체는 브라우저에서 제공해준다.
 * 현재 보고있는 app.js에서 document 객체를 사용할 수 있는 이유는
 * index.html에서 보고있는 js를 import하고 있기 때문에
 * 브라우저에서 해당 document 객체를 제공해주는 것이다.
 */

/**
 * 자바스크립트를 이용하여 css를 컨트롤, 태그의 색상을 변경할 수 있다.
 * 
 * 또한 해당 element에 eventListener를 적용한다.
 * arguments("eventName", "function");
 * 해당 태그에 첫번째 argument로 지정한 이벤트가 발생하면,
 * 두번째 argument로 지정한 함수가 호출된다.
 * 
 * 여기서는 해당 태그에 클릭 이벤트가 발생하면,
 * 해당 태그 글자의 색상을 파란색으로 변경한다.
 */
const eventElement1 = document.querySelector("#eventElement1");
function handleEventElement1Click() {
    eventElement1.style.color = "blue";
    alert("Change Color!");
}
eventElement1.addEventListener("click", handleEventElement1Click);


