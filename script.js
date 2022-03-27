function addDivs(num){
    const mainContainer = document.querySelector(".main-container");
    let maxWidth = num*30;
    mainContainer.style.cssText = `max-width: ${maxWidth}px`;
    for(let i=0;i<num;i++){
        for(let j=0;j<num;j++){

            
            const content = document.createElement('div');
            content.classList.add('subDiv');
            mainContainer.appendChild(content);
        }
    }
    

}