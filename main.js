const pigLatin = () => {
  let word = document.getElementById('userInput').value
  let p = document.getElementById('newWord')
  let vowels = ['a','e','i','o','u']
  let LowerTrimWord = word.toLowerCase().trim()
  let brokenUpWord = LowerTrimWord.split('')
 for (let i = 0; i < brokenUpWord.length; i++) {
    let pigLatin = ''
    let n = vowels.indexOf(brokenUpWord[i]);
    if (n != -1) {
      let p1 = brokenUpWord.slice(i).join('')
      let p2 = brokenUpWord.slice(0,i).join('')
      if (i == 0) {
        pigLatin=word+'yay'
      }
      else {
        pigLatin=p1+p2+'ay'
      }
      p.innerHTML=pigLatin
    }
 }
}


