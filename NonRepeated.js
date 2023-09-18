const { count } = require("console");


// Long Method

const firstNonRepeated = (s) => {
    const arrayWord = s.split('');
    let count = 0;
    for( let i = 0; i < arrayWord.length; i++){
        count = 0;
        for (let  j = 0; j < arrayWord.length; j++){
            if (arrayWord[i] === arrayWord[j]){
                count++;
            }
        }
        if ( count === 1){
            return arrayWord[i];
        }
   }
    return null
}

// Fast Method

const AfirstNonRepeated = s => [...s].find((i) => s.indexOf(i) == s.lastIndexOf(i)) || null


console.log(AfirstNonRepeated("1122321235121222"));