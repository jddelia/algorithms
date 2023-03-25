// This function returns a boolean indicating whether two strings are anagrams

function anagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const s1Letters = {};
  const s2Letters = {};

  for (let i = 0; i < s1.length; i++) {
    if (!s1Letters[s1[i]]) {
      s1Letters[s1[i]] = 1;
    } else {
      s1Letters[s1[i]] += 1;
    }
    if (!s2Letters[s2[i]]) {
      s2Letters[s2[i]] = 1;
    } else {
      s2Letters[s2[i]] += 1;
    }
  }

  for (let key in s1Letters) {
    if (s1Letters[key] !== s2Letters[key]) return false;
  }
  return true;
}

console.log(anagram("dog", "god"));
console.log(anagram("restful", "fluster"));
console.log(anagram("cats", "tocs"));
console.log(anagram("monkeyswrite", "newyorktimes"));
