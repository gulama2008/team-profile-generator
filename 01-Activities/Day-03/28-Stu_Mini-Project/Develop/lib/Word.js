const Letter = require("./Letter");

class Word {
    constructor(word) { 
        this.word = word;
    }
    toString() { 
        wordHide = this.word.split('').map((letter) => { "_" }).join(" ");
    }
    getSolution() { 
        return this.word;
    }
    guessedCorrectly() { 

    }
}

module.exports = Word;
