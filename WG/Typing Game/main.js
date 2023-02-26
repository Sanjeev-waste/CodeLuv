let show = document.querySelector("#show");
let scoreElem = document.querySelector('.score');
let resetElem = document.querySelector('.reset');

// GAME CONSTANTS
let currWordIndex = 0;
let currLetterIndex = 0;
let score = 0;
let words = ["piyush","anjali","sonal","sanjeev","varda","rajat","urvashi","jitender","Gulshan","Sameer","priya","sanjana","preet","Neetu","Neha",];

if(localStorage.getItem('score') != null){
    score = localStorage.getItem('score');
    scoreElem.innerHTML = score;
}

const generateLetter = (letter) => {
    letter = letter.toUpperCase();
    return `<span data-letter="${letter}" class="letter">${letter}</span>`;
}

const load_game = () => {
    currWordIndex = Math.floor(Math.random()*words.length);
    currLetterIndex = 0;
    show.innerHTML = "";
    let word = words[currWordIndex];
    for(let i = 0; i<word.length; i++){
        show.innerHTML += (generateLetter(word[i]));
    }
};

window.addEventListener('load',()=>{
    load_game();
})

window.addEventListener('keypress',(e) => {
    let key = document.querySelector(`[data-key="${e.key.toUpperCase()}"]`);
    if(key){
        key.classList.add('active');
        setTimeout(()=>{
            key.classList.remove('active');
        },300)

        let word = words[currWordIndex];
        if(e.key.toUpperCase() == word[currLetterIndex].toUpperCase()){
            let letter = document.querySelectorAll(`[data-letter]`)[currLetterIndex];
            if(letter){
                letter.classList.add('typed');
                currLetterIndex++;
            }
            if(currLetterIndex == word.length){
                setTimeout(()=>{
                    score++;
                    localStorage.setItem('score',score);
                    scoreElem.innerHTML = score;
                    load_game();
                },300);
            }
        }
    }
});


resetElem.addEventListener('click',()=>{
    localStorage.removeItem('score');
    scoreElem.innerHTML = '0';
    score = 0;
})