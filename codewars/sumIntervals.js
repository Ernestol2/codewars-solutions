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
    return result.reduce((ac, cu) => ac + cu)
}   


