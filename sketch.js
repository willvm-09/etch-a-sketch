
function sixteenDivFunction() {
    for(let i=1; i<=16; i++){
    let div = document.createElement("div");
    div.classList.add("divs");
    document.querySelector("#mainDiv").appendChild(div);
}};

sixteenDivFunction();

function eightDivFunction() {
    let eightDivs = document.querySelector("#eightByEight");
    eightDivs.addEventListener("click", () => {

    for (let x=1; x<=48; x++) {
        let eightDiv = document.createElement("div");
        eightDiv.classList.add("divs");
        document.querySelector("#mainDiv").appendChild(eightDiv);
    }
})};

eightDivFunction();

function twelveDivFunction() {
let twelveDivs = document.querySelector("#twelveByTwelve");
twelveDivs.addEventListener("click", () => {
    for (let i=1; i<=80; i++) {
        let twelveDiv = document.createElement("div");
        twelveDiv.classList.add("divs");
        document.querySelector("#mainDiv").appendChild(twelveDiv);
    }
})};

twelveDivFunction();

function sixtyFourDivFunction() {
let sixteenDivs = document.querySelector("#sixteenBySixteen");
sixteenDivs.addEventListener("click", () => {
    for (let i=1; i<112; i++) {
        let sixteenDiv = document.createElement("div");
        sixteenDiv.classList.add("divs");
        document.querySelector("#mainDiv").appendChild(sixteenDiv);
    }
})};

sixtyFourDivFunction();

function resetButton(){
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
        location.reload();
    })};

resetButton();







