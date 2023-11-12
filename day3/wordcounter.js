const input = document.getElementById("input");
const wordCountDisplay = document.getElementById("word-count");
let word = 0;
let currentPage = 1;
const wordsPerPage = 101;
input.addEventListener("input", inputHandler); 
function inputHandler(event) {
    const wordCount = input.value.trim().split(" ");
    input.value = input.value.replace(/\s\s+/g, " ");
    currentPage = Math.floor(word / wordsPerPage) + 1;
    word = wordCount.length
    wordCountDisplay.innerHTML = `Page ${currentPage} You have typed : ${wordCount.length}  Words `;
    
};





