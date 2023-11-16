//imageslide.html의 스크립트
//
window.onload = function(){
  let picture = ["images/cup-1.jpg", "images/cup-2.jpg",
      "images/cup-3.jpg"];
  let picIdx = 0;

  showSlide();
  function showSlide(){
    //이미지의 경로 - src 속성 사용
    let p = document.getElementById("pic");
    p.src = picture[picIdx];
    picIdx++;
    if(picIdx == picture.length){ 
      picIdx = 0;
    }
    setTimeout(showSlide, 2000);
  }

}