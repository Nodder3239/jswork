// index.html의 스크립트

window.onload = function(){
  //스크롤 했을때 y과표값을 알아내서
  //200px 이상이면 backward 애니메이션 실행
  //200px 미만이면 forward 애니메이션 실행
  let text = document.querySelector("h1");


  //이벤트 함수 사용
  window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    console.log('scrollY', value);

    if(value > 300){
      text.style.animation = "backward 1s ease-out";
    }else{
      text.style.animation = "forward 1s ease-out";
    }
  })

}