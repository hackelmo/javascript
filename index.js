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
//setTimeOut 이라는 고차함수

//static은 클래스레벨의 <-> 인스턴스레벨

// eval('const num=2; console.log(num*2);');
// console.log(isFinite(1));

// console.log(parseInt(12.93));

// //한글 아스키코드로 변경
// const a = '드림코딩';
// console.log(encodeURIComponent(a));

// //지수표기법
// const num3 = 1022;
// console.log(num3.toExponential());

// //반올림
// const num4 = 1234.6;
// console.log(num4.toFixed());

// //원하는 자릿수까지 유효하도록 반올림
// console.log(num4.toPrecision(5));

// const num = 0.1 + 0.2 - 0.2 - Number.EPSILON;
// //절대값
// console.log(Math.abs(-0.2));

// console.log(new Date('2022-01-02T03:24:00'));
// console.log(new Date('Jun 5, 2022'));
// console.log(new Date());

// const text = 'Hello World!';
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// const ids = 'user1,user2,user3';
// console.log(ids.split(','));

// setInterval(() => {
//   console.log(new Date().toLocaleString('ko-KR'));
// }, 1000);

//함수를 값처럼 사용할수있다면 =일급함수
//함수에서 다른함수를 인자로 받거나 반환하는 함수 = 고차함수

//이터레이션 =반복 순회

//프로미스 실패승리 다보고싶다면 Promise.allSettled

//직렬화 serializing : 객체를 문ㄴ자열로 변환

//스코프 = 식별자가 유효한 범위
// 렉시컬 환경에 있는 환경 레코드를 먼저 확인하고 변수가 없다면 스코프체인을 따라 부모환경을 본다
//실행 콘섹스트 스택

//프로토타입 = 공통적으로 가지고있는 속성들 함수들을 묶어놓은 원형
//객체간 상속의 연결고리는 프로토타입 체인으로 연결되어있다

//정적레벨 함수 Dog.printName =()=>{}
//인스턴스레밸 함수 function Dog()=>{this.printName=()=>}
//프로토타입 레벨의 함수 Dog.prototype.printName=()=>{}

//클로져 = 내부함수에서 외부함수의 스코프에 접근할수있는것

//바벨 = 최신버전을 배포할때 예전버전으로 낮춰서 변환해준다
