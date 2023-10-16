function closingInSum(n) {

    let b =  n.toString().split("");
    if(b.length <= 2) return parseInt(b.join(""));

    let a = b.splice(0, b.length / 2);

    if(a.length != b.length) a.unshift("0")
    
    let res = []
    for(let i = 0; i < a.length; i++) {
        res[i] = a[i].concat(b[i])
    }
    
    return res.reduce((ac, cu) => parseInt(+ac + +cu))
}

