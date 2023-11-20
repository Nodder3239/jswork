//create_element2.html의 스크립트

function addP(){
  //p 태그 생성
  //<li>Tea</li>
  //부모요소.appendChild(자식요소)
  let newP = document.createElement("p");
  let newText = document.createAttribute("<img src='images/");
  newP.appendChild(newText);  //p태그에 내용 추가

  //div태그에 p태그 추가
  let div = document.getElementById("info");
  div.appendChild(newP);
}

