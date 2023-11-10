//calcage.html의 스크립트
//나이를 계산하는 프로그램
//write() -> getElementById().innerHTML
function calcAge(){
  const CURRENT_YEAR = 2023;
  let birthYear, age;
  birthYear = prompt("태어난 연도를 입력하세요.", "YYYY");
  //입력
  if(birthYear == null){
    document.getElementById("print").innerHTML
       = "입력이 취소되었습니다.";
  }else if(isNaN(birthYear)){   //문자를 입력했을 경우
    document.getElementById("print").innerHTML
       = "숫자를 입력해주세요.";
  }else{
    birthYear = parseInt(birthYear);  //문자를 숫자로 바꿈
    //계산 
    age = CURRENT_YEAR - birthYear;
    document.getElementById("print").innerHTML
       = CURRENT_YEAR + "년 현재<br>" + birthYear
          + "년에 태어난 사람의 나이는 " + age + "세입니다.";
  }
}