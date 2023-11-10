//function_return.html의 스크립트

//제곱수를 계산하는 함수
//어떤 수를 입력받아 제곱하는 함수
// function square(x){
//   let num = x * x;
//   return num; //변수 리턴
// }

let square = function(x){
  return x * x;
}

// function add(x, y){
//   return x + y; // 구문 리턴
// }

let add = function(x, y){
  return x + y;
}

console.log(square(5));

let result = add(10, 11);
console.log(result);
// console.log(add(4, 5));