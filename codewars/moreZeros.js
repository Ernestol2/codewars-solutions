function moreZeros(s) {
    const binaryCounts = {};
    const result = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      // Calculate the binary representation of the ASCII value
      const binary = (char.charCodeAt(0)).toString(2);
  
      // Count the number of zeros and ones in the binary representation
      const zeros = (binary.match(/0/g) || []).length;
      const ones = (binary.match(/1/g) || []).length;
  
      // Check if the number of zeros is greater than the number of ones
      if (zeros > ones) {
        // Add the character to the result if it meets the condition
        if (!binaryCounts[char]) {
          binaryCounts[char] = true;
          result.push(char);
        }
      }
    }

    return result;
}

function moreZeros(s){
    let arrCodePoints = s.split('').map(c => c.charCodeAt(0)).map(n => n.toString(2));
    let chars = arrCodePoints.filter(s => s.split('0').length > s.split('1').length).map(s => parseInt(s, 2));
    let uniq = new Set(chars);
    return String.fromCharCode(...Array.from(uniq)).split('')
}

function moreZeros(s){
    return [...new Set([...s].filter((qure)=>{
       let f=qure.charCodeAt(0).toString(2).replace(new RegExp('0','g'),'').length,
           g=qure.charCodeAt(0).toString(2).replace(new RegExp('1','g'),'').length;
       return g>f
    }))]
}

  const moreZeros = s =>
  [...new Set(s)].filter(val => val.charCodeAt().toString(2).replace(/1/g, ``).length > 3);