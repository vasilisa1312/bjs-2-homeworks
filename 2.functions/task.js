function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;

  for(let i = 0; i < arr.length; i++) {
    avg += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }else if (arr[i] < min){
      min = arr[i];
    }
  }

  avg = avg / arr.length;
  

  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
