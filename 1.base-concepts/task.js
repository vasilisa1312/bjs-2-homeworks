"use strict"
function solveEquation(a, b, c) {

  let arr;

  let discriminant = (b**2) - (4 * a * c);
  if (discriminant < 0) {
    arr = []
  }else if (discriminant > 0) {
    let discriminantFirst=(-b+Math.sqrt(discriminant))/(2*a);
    let discriminantSecond=(-b-Math.sqrt(discriminant))/(2*a);
    arr = [discriminantFirst, discriminantSecond]
  }else if (discriminant==0) {
    let discriminantThird = -b / ( 2 * a );
    arr = [discriminantThird]
  }

  
  
  return arr;
}











function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}