// O(n) - Time | O(n) - Space
function makeAnagram(a, b) {
  let hashA = {};
  let hashB = {};
  let deleteCount = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] in hashA) {
      hashA[a[i]]++;
    } else {
      hashA[a[i]] = 1;
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (b[j] in hashB) {
      hashB[b[j]]++;
    } else {
      hashB[b[j]] = 1;
    }
  }

  for (let letter in hashA) {
    if(letter in hashB){
      if(hashA[letter] !== hashB[letter]){
      let diff = hashA[letter] - hashB[letter]
      deleteCount += Math.abs(diff);
      }
    } else {
      deleteCount += hashA[letter];
    }
  }

  for (let letter in hashB) {
    if(letter in hashA === false){
      deleteCount += hashB[letter];
    }
  }
  return deleteCount;
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')) // 30
console.log(makeAnagram('cde', 'abc')) // 4
console.log(makeAnagram('showman', 'woman')) // 2 
console.log(makeAnagram('bacdc', 'dcbac')) // 0


