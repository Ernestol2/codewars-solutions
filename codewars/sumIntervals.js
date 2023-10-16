function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    
    console.log(intervals);
    let start = intervals[0][0];
    let end = intervals[0][1];
    let array = [[start, end]]    

    for(let i = 1; i<intervals.length; i++) {
        for(let j=0; j<intervals[i].length; j++) {
            if(intervals[i][j] < end) {
                if(intervals[i][j + 1] > end) {

                    array[0][1] = intervals[i][j + 1]
                    end = intervals[i][j + 1]
                }
            } else if(intervals[i][j] === end) {
                end = end
            } else {
                array[i] = intervals[i]
            }
        }
    }

    let result = []
    array.map(elem => {
        elem.reduce((ac, cu) => {
            result.push(cu - ac);
        })
    })
    let m = -Number.MAX_VALUE
    console.log(m);
    return result.reduce((ac, cu) => ac + cu)
}   

sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
]);

/*  chat gpt

function sumIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    let result = 0;
    let start = intervals[0][0];
    let end = intervals[0][1];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentStart = intervals[i][0];
      const currentEnd = intervals[i][1];
  
      if (currentStart <= end) {
        // Overlapping interval
        end = Math.max(end, currentEnd);
      } else {
        // Non-overlapping interval
        result += end - start;
        start = currentStart;
        end = currentEnd;
      }
    }
  
    // Add the length of the last interval
    result += end - start;
  
    return result;
  }

*/

/* 
function sumIntervals(xs) {
  let ys = xs.sort(([a,b], [c,d]) => a-c);
  let m = -Number.MAX_VALUE;
  let res = 0;
  for (let [a,b] of ys) {
    m = Math.max(m, a);
    res += Math.max(0, b-m);
    m = Math.max(m, b);
  }
  return res;
}
*/