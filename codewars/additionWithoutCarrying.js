function additionWithoutCarrying(a, b) {
    const arrA = Array.from(String(a), (num) => Number(num));
    const arrB = Array.from(String(b), (num) => Number(num));
    const resultArr = [];
  
    while (arrA.length !== arrB.length) {
      if (arrA.length < arrB.length) {
        arrA.unshift(0);
      } else {
        arrB.unshift(0);
      }
    }
  
    let temp = 0;
    for (let i = 0; i < arrA.length; i++) {
      temp = arrA[i] + arrB[i];
      if (temp >= 10) {
        temp -= 10;
      }
      resultArr.push(temp);
    }
  
    return parseInt(resultArr.join(""));
  }

  ////////////////////////////////////////////

function additionWithoutCarrying(a, b) {
    let res = "";
    
    while (a > 0 || b > 0) {
      res = (a % 10 + b % 10) % 10 + res;
      
      a = Math.floor(a / 10);
      b = Math.floor(b / 10);
    }
    
    return +res;
}

///////////////////////////////////////////////

const additionWithoutCarrying = (a, b) =>
  +[...`${a}`.padStart(5)].map((val, idx) => (+val + +`${b}`.padStart(5)[idx]) % 10).join(``);

