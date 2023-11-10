//array3.html의 스크립트
//1 ~ 10 자연수를 배열에 저장
let number = new Array(10);
console.log(number.length);

//저장
for(let i = 0; i<number.length; i++){
  number[i] = i + 1;
}

//출력
for(let num in number){
  document.write(number[num] + " ");
}
// for(let num = 0 ; num<number.length; num++){
//   document.write(number[num] + " ");
// }

document.write("<br>");

//알파벳 대문자를 저장
let alphabet = new Array(26);
let ch = 'A';
ch = ch.charCodeAt(0);  // 문자를 코드값으로 저장
for(let i=0; i<alphabet.length; i++){
  alphabet[i] = ch;
  ch++;
  // console.log(alphabet[i]);
}

//출력
for(let i in alphabet){
//코드값을 문자로 저장
  console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}

let alphabet2 = new Array(26);
for(let a = 0; a<alphabet2.length; a++){
  alphabet2[a] = String.fromCharCode(a + 65);
}
for(let a in alphabet2){
  document.write(alphabet2[a] + " ");
}