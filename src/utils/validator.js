//Validate the entered word with a dictionary
const words = require('../dictionary')
var word = 'tzzzz';

 function validator(word)
{ 
    
    for(let i in words)
    {
       if(words[i]===word)
       return 'word matched'
    }
   
   return 'Invalid word'
}
console.log(validator(word));