// variable.html의 스크립트
// ?학생은 ?학년 ?반입니다.
// document.write()
// 변수 이름에 예약어는 사용 불가(if, class, for, ...)
var sName = "우영우";
var sGrade = 3;
var sClass = 4;
document.write(sName, sGrade, sClass, "<br>");
document.write(sName + " 학생은 " + sGrade +"학년 " 
      + sClass + "반입니다.<br>");
document.write(sName + "&nbsp; &nbsp;" + sGrade + " "  + sClass + " ");      

// console.log("이름: " + sName);
// console.log("학년: " + sGrade);
// console.log("반: " + sClass);

// charset(문자셋) 연습
// 아스키 코드
var ch1=65;
console.log(ch1);
console.log(String.fromCharCode(ch1));

var ch2='B';
console.log(ch2);
console.log(ch2.charCodeAt(0));

// 유니코드
let ch3 = "가";
console.log(ch3);
console.log(ch3.charCodeAt(0));