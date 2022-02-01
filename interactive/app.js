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

