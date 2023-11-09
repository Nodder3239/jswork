// fee.html의 스크립트
let age = prompt("나이를 입력하세요", "8");
let fee = 0;  //초기화
if(age != null){
  if(age < 8 && age >= 0){
    document.write("취학 전 아동입니다. ");
    fee = 1000;
  }else if(age < 13){
    document.write("초등학생입니다. ");
    fee = 2000;
  }else if(age < 20){
    document.write("중,고등학생입니다. ");
    fee = 2500;
  }else{
    document.write("일반인입니다. ");
    fee = 3000;
  
  }document.write("<br>입장료는 <span class='accent'>" + fee + "</span>원 입니다.");  
}else{
  document.write("다시 입력하세요. ");
}
