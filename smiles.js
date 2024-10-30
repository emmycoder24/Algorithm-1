
let sentence = "Hello there.";


let characterCount = 0;
let wordCount = 1; 
let vowelCount = 0;

let vowels = "aeiouAEIOU";


for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    
    
    characterCount++;

    
    if (char === " ") {
        wordCount++;
    }

    
    if (vowels.includes(char)) {
        vowelCount++;
    }
}

if (sentence.endsWith(".")) {
    characterCount -= 1;
}

console.log("Character count (excluding period):", characterCount);
console.log("Word count:", wordCount);
console.log("Vowel count:", vowelCount);
