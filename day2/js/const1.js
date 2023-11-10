//const1.html의 스크립트
//상수(Constant Variable)
//변수
let current_year = 2023;
current_year = 2022;
console.log(current_year);

//상수 - 재할당 할 수 없음
const MONTH = 12;
// MONTH = 13;

console.log("1년은 " + MONTH + "달이 있습니다.");

//원의 넓이 계산하기
//circleArea = PI * radius * radius
const PI = 3.141592653589793238462643383279;
let radius = 5;
let circleArea;

//연산
circleArea = Math.round(PI * radius * radius * 100) / 100;

//출력
document.write("원의 넓이: " + circleArea);

document.write("<br>");

//공의 속도를 변환하는 프로그램 작성
//KM -> MILE, 1mile = 1.609km
let kph, mph;
const RATE_KPH_MPH = 1.609;
//입력
kph = prompt("구속을 입력하세요(km)", "100");
kph = parseFloat(kph);  //문자를 실수로 변환

//연산
mph = Math.round(kph/RATE_KPH_MPH * 100) / 100;
//kph = mph * RATE_KPH_MPH;

//출력 - 자리수 설정함수 : toFixed(자리수)
document.write(kph + "km는 " + mph.toFixed(2) + "mile입니다.");

// NaN = Not a Number