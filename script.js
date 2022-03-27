var num = 16;
function reset(){
    //delete the entire main-container
    var oldDivs = document.querySelector(".main-container");
    oldDivs.parentNode.removeChild(oldDivs);
    //then it adds a new empty main-container
    var body = document.querySelector(".body");
    var newDivs = document.createElement("div");
    newDivs.classList.add('main-container');
    body.appendChild(newDivs);
    //asks for user input and checks if the number in between 1-100
    var input = window.prompt("Please choose how many squares you want: ");
    checkInput(input);
    function checkInput(input){
    if(input>100){
        alert("Your number should be max 100");
        var input = window.prompt("Please choose how many squares you want: ");
        checkInput(input);
        } else {
            return input;
        }
    }   
    addDivs(input);
}


function addDivs(num){
    const mainContainer = document.querySelector(".main-container");
    let maxWidth = num*28;
    mainContainer.style.cssText = `max-width: ${maxWidth}px`;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){

            //creates a subDiv
            const content = document.createElement('div');
            content.classList.add('subDiv');
            mainContainer.appendChild(content);
        }
    }
    

}