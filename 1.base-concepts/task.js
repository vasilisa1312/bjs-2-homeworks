"use strict"
function solveEquation(a, b, c) {

  let arr;

  let d = (b**2) - (4 * a * c);
  if (d < 0) {
    arr = []
  }else if (d > 0) {
    let d1=(-b+Math.sqrt(d))/(2*a);
    let d2=(-b-Math.sqrt(d))/(2*a);
    arr = [d1, d2]
  }else if (d==0) {
    let d3 = -b / ( 2 * a );
    arr = [d3]
  }

  
  
  return arr;
}











function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}