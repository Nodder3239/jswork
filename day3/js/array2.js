//array2.html의 스크립트
//Array객체를 사용한 배열
let num = new Array();
console.log(num);
console.log(num.length + "개");

//저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num);
console.log(num.length + "개");

//특정 요소 1개 조회
console.log(num[0]);

//전체 요소 검색
for(let i = 0; i<num.length; i++){
  console.log(num[i] + " ");
}

//연산
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum = 0;
let avg;
for(let i = 0; i<num.length; i++){
  // sum = sum + num[i];
  sum += num[i];  //누적 합계
}
console.log("합계: " + sum);

avg = sum/num.length;
console.log("평균: " + avg);