// const day = 2;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = '월요일';
//     break;
//   case 2:
//     dayName = '화요일';
//   case 3:
//     dayName = '수요일';
//     break;
//   case 4:
//     dayName = '목요일';
// }
// console.log(dayName);

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i, j);
//     if (j === 2) {
//       return;
//     }
//   }
// }

// console.log(true && true);

//함수의 arguments ?

//꼭 한번은 실행하고 싶다면 while 문보다는 do while을 서냍ㄱ하자ㅏ
//함수를 사용해서 유지보수성 재사용성을 높이자

//IIFE (function(){})()

//일급객체 = 일반객체처럼 모든 연산이 가능한것 === 매개변수 반환값 할당명령문 동일비교대상
//일급함수 = 함수를 다른 함수의 매개변수 및 반환값으로 쓸수 있다

const print = (num) => console.log(num);
const printMultiplyTwice = (num) => console.log(num * 2);

function random(num, func) {
  for (let i = 0; i < num; i++) {
    func(i);
  }
}

random(5, printMultiplyTwice);
