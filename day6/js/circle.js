//class_circle.html의 스크립트
//원의 둘레와 면적
//원의 둘레 2 * PI * radius
//원의 둘레 PI * radius * radius
function Circle(radius){
  this.radius = radius; //멤버 변수, 필드

  //원의 둘레를 구하는 함수
  this.round = function(){
    return 2 * Math.PI * this.radius;
  }
  
  //원의 면적을 구하는 함수
  this.area = function(){
    return Math.PI * this.radius * this.radius;
  }
}


//원 1개 생성
let c1 = new Circle(4);

document.write("원의 둘레: " + c1.round().toFixed(2) + "cm<br>");
document.write("원의 면적: " + c1.area().toFixed(2) + "cm<sup>2</sup><br>");