//calc_score.html의 스크립트
//학생 5명의 국어와 수학 점수 통계

let score = [
  [80, 70],
  [90, 60],
  [70, 70],
  [100, 90],
  [83, 55]
]

let kor_sum = 0;
let math_sum = 0;
let kor_avg, math_avg;

//과목별 점수 합계
for(let i=0; i<score.length; i++){
  kor_sum += score[i][0];
  math_sum += score[i][1];
}

kor_avg = kor_sum / score.length;
math_avg = math_sum / score.length;

document.write("국어 합계: " + kor_sum + "<br>");
document.write("국어 평균: " + kor_avg + "<br>");
document.write("수학 합계: " + math_sum + "<br>");
document.write("수학 평균: " + math_avg + "<br>");

//변수를 배열로 선언
let sumScore = [0, 0];      //합계
let avgScore = [0.0, 0.0];  //평균

for(let i=0; i<score.length; i++){
  for(let j=0; j<score[i].length; j++)
  sumScore[j] += score[i][j];
}

for(let k=0; k<score[0].length; k++){
  avgScore[k] = sumScore[k] / score.length;
}

document.write("합계: " + sumScore + "<br>");
document.write("평균: " + avgScore + "<br>");