//배열 생성 방법
let array = new Array(2);
console.log(array);

array = new Array(1, 2, 3);
console.log(array);

//생성자함수랑 결과값은 같지만 statc으로 만들기
array = Array.of(1, 2);
console.log(array);

//배열 리터럴 이용해서 생성
const anotherArray = [1, 2, 3];
array = Array.from('text');
console.log(array, 1);

//일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
//하지만 자바스크립트 배열ㅇ느 연속적ㅇ르ㅗ 이어져 있지 않고
//오브젝트와 유사함
//자바스크립트 배열은 일반적으로 배열의 동작을 흉내낸 객체다!
