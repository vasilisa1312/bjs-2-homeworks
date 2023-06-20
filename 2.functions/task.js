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
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let result;
  for(let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
      max = arr[i];
    }else if (arr[i] < min){
      min = arr[i];
    }
  }
  result = max - min;
  if (result < 0) {
    return 0;
  } else {
    return result;
  }
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
