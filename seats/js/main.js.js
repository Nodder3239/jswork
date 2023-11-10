// main.html의 스크립트
//입장객 수에 따른 행과 열, 줄 수 계산
let customer, colNum, rowNum;

customer = prompt("입장객 수 입력: ", "00");
colNum = prompt("좌석 열 수 이력: ", "0");

//나머지의 유무에 따른 조건문
if(customer % colNum == 0){
  rowNum = customer / colNum;
}else{
  rowNum = parseInt(customer / colNum) + 1;
}
document.write("<table>");
for(let i=0; i<rowNum; i++){
  document.write("<tr>")
  for(let j=1; j<=colNum; j++){
    let seatNum = colNum * i + j;
    //좌석번호가 고객 수 보다 크면 빠져나옴
    if(seatNum > customer) break;
    document.write("<td>좌석" + seatNum + "</td>");
    // if(seatNum === customer) break;
  }
  document.write("</tr>")
}
document.write("</table>");
