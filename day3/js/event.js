//showhide-event.html의 스크립트


//버튼을 클릭할 때 호출
function showText(){
  //텍스트는 보이고, 보기 버튼은 숨기기
  // document.getElementById("detail").style.display = "block";
  // document.getElementById("show").style.display = "none";

  let text = document.getElementById("detail");
  text.style.display = "block";
  let btn = document.getElementById("show");
  btn.style.display = "none";
}
  
function hideText(){
  //텍스트는 숨기고, 보기 버튼은 보이기
  // document.getElementById("detail").style.display = "none";
  // document.getElementById("show").style.display = "block";

  let text = document.getElementById("detail");
  text.style.display = "none";
  let btn = document.getElementById("show");
  btn.style.display = "block";
}