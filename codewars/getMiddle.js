function getMiddle(string) {
    let size = string.length
    return size % 2 == 0
        ? string.slice((size/2) - 1, (size/2) + 1)
        : string.slice(size/2, size/2 + 1)
}

////////////////

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

////////////////

function getMiddle(s) {
    return s.slice((s.length-1)/2, s.length/2+1);
  }