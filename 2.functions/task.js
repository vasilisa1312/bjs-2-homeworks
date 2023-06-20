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
  if (isNaN(result)) {
    return 0;
  }else {
  return result;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let result = sumEvenElement - sumOddElement;
  if (isNaN(result)) {
    return 0;
  }else {
  return result;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let result = sumEvenElement / countEvenElement;
  if (isNaN(result)) {
    return 0;
  }else {
  return result;
  }
}

function makeWork (arrOfArr, func) {

}
