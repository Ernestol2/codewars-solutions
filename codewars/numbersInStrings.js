function solve(s) {
    let result = []
    for(let char of s) {
        if(parseInt(char) || parseInt(char) == 0) {
            result.push(parseInt(char))
        } else {
            result.push("-")
        }
    }
    let joint = result.join("");
    let splited = joint.split("-")
    let sorted = (splited.sort((a, b) => b - a));
    return parseInt(sorted[0]);
}
//////////////////////////////////////

function solve(s){
    return Math.max(...s.match(/\d+/g));
  };

//////////////////////////////////

const solve = s => Math.max(...s.match(/\d+/g));

