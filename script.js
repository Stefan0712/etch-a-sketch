var num = 16;
function reset(){
    var oldDivs = document.querySelector(".main-container");
    oldDivs.parentNode.removeChild(oldDivs);
    var body = document.querySelector(".body");
    var newDivs = document.createElement("div");
    newDivs.classList.add('main-container');
    body.appendChild(newDivs);

    var input = window.prompt("Please choose how many squares you want: ");
    if(input>100){
        alert("Your number should be max 100");
        var input = window.prompt("Please choose how many squares you want: ");

    }
    addDivs(input);
}


function addDivs(num){
    const mainContainer = document.querySelector(".main-container");
    let maxWidth = num*28;
    mainContainer.style.cssText = `max-width: ${maxWidth}px`;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){

            
            const content = document.createElement('div');
            content.classList.add('subDiv');
            mainContainer.appendChild(content);
        }
    }
    

}