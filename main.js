// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(value){
  notes.push(document.getElementById(value));
});

// Write named functions that change the color of the keys below
const keyPlay = (keyClicked) => { 
    keyClicked.target.style.backgroundColor = 'orange';
}; 
const keyReturn = (keyClicked) => { 
    keyClicked.target.style.backgroundColor = '';
};

// Write a named function with event handler properties
//parameter gì cũng được, nó sẽ đc truyền vào loop dưới
const logicOfPressing = (value) => {
    value.onmousedown = keyPlay;
    value.onmouseup = keyReturn;
};

// Write a loop that runs the array elements through the function
notes.forEach(logicOfPressing);

//audio

const playC = () => {
    var audio = document.querySelector("#ca");
    audio.play();
};

const playCx = () => {
    var audio = document.querySelector("#caa");
    audio.play();
};
const playD = () => {
    var audio = document.querySelector("#d");
    audio.play();
};

const playDx = () => {
    var audio = document.querySelector("#Daa");
    audio.play();
};
const playE = () => {
    var audio = document.querySelector("#e");
    audio.play();
};

const playF = () => {
    var audio = document.querySelector("#f");
    audio.play();
};
const playFx = () => {
    var audio = document.querySelector("#Faa");
    audio.play();
};

const playG = () => {
    var audio = document.querySelector("#g");
    audio.play();
};
const playGx = () => {
    var audio = document.querySelector("#Gaa");
    audio.play();
};

const playA = () => {
    var audio = document.querySelector("#a");
    audio.play();
};

const playAx = () => {
    var audio = document.querySelector("#Aaa");
    audio.play();
};

const playB = () => {
    var audio = document.querySelector("#b");
    audio.play();
};

// end of audio

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click',function(){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.querySelector("#letter-note-five").innerHTML ='D';
  document.querySelector("#letter-note-six").innerHTML ='C';
});

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');
// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click',function(){
    nextThree.hidden = false;
    nextTwo.hidden = true;
    document.querySelector("#word-five").innerHTML = 'DEAR';
    document.querySelector("#word-six").innerHTML = 'FRI-';
    lastLyric.style.display='inline-block'; 

    document.getElementById('letter-note-three').innerHTML = 'G';
    
    document.getElementById('letter-note-four').innerHTML = 'E';
    
    document.getElementById('letter-note-five').innerHTML = 'C';
    
    document.getElementById('letter-note-six').innerHTML = 'B';
});

// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click',function(){
  
    nextThree.hidden = true;
    document.getElementById('word-one').innerHTML = 'HAP-'; 
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
    lastLyric.style.display = 'none';
    startOver.hidden= false;
});

// This is the event handler property and function for the startOver button
startOver.addEventListener('click', function(){
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
});
