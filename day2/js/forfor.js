//forfor.html의 스크립트
//중첩 for문

//5행 5열에 문자 출력
for(let i=1; i<=5; i++){
  for(let j=1; j<=5; j++){
    document.write("$");
  }
  document.write("<br>");
}
for(let i=2; i<=9; i++){
  for(let j=1; j<=9; j++){
    ans = i * j;
    document.write(i + " X " + j + " = " + ans + " | ");
  }
  document.write("<br>");
}

//직각 삼각형 모양으로 출력
for(let i=1; i<=5; i++){
  for(let j=1; j<=i; j++){
    document.write("$");
  }
  document.write("<br>");
}
for(let i=2; i<=5; i++){
  for(let j=1; j<=6-i; j++){
    document.write("$");
  }
  document.write("<br>");
}
for(let i=1; i<=5; i++){
  for(let j=5; j>=i; j--){
    document.write("$");
  }
  document.write("<br>");
}
for(let i=0; i<=4; i++){
  for(let j=1; j<=5; j++){
    document.write(5*i+j + " ");
  }
  document.write("<br>");
}