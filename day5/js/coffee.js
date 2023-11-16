// coffee.html의 스크립트
let bigPic = document.querySelector("#pic");
let smallPics = document.querySelectorAll(".small");
for(let i=0; i<smallPics.length; i++){
  smallPics[i].onclick = function(){
  bigPic.setAttribute("src", this.src);
  };
}
//상세설명 보이기/숨기기(토글 구현)

let view = document.getElementById("view"); //상세설명 보기
let detail = document.getElementById("detail");
let sw = true;  //상태변수
view.onclick = function showHide(){
  if(sw){
    detail.style.display="block";
    view.innerText = "상세 설명 닫기";
    sw = false;
  }else{
    detail.style.display="none";
    view.innerText = "상세 설명 보기";
    sw = true;
  }
}
