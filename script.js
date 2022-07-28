/* ACCESS TO THE ELEMENTS */
const enteredNumber=document.getElementById("enteredNumber");
const enterInput=document.getElementById("enterInput");
const oddEven=document.getElementById("oddEven");
const mainBox=document.getElementById("mainBox");
const history=document.getElementById("history");
const historyBTN=document.getElementsByClassName("historyBTN");
const historyList=document.querySelector(".historyList");


/* get  NUMBER */
function getNumber(num){
    enterInput.value += num;
    changeFontSize()
}


/* SET THE Math symbol*/
let number;
let sym1; /* get the symbole  */

function getMathsymbol(sym){ 


    oddEven.style.visibility = "hidden"

    if(enterInput.value.length ==0  )
    {
        alert("please enter a number!")
    }

    else
    {
        
        enteredNumber.style.visibility="visible";
        sym1=sym;
        number=parseInt(enterInput.value);
        enteredNumber.innerHTML=number + sym;
        enterInput.value="";
        enterInput.style.color="white";

    }
   
    
}



/* calcuate */

function calcuate(num1,num2){
    if (sym1 === "+"){
        return num1 + num2
    }

    if (sym1 === "-"){
        return num1 - num2
    }

    if (sym1 === "×"){
        return num1 * num2
    }

    if (sym1 === "/"){
        return num1 / num2
    }

    if (sym1 === "%"){

        if (num1 % num2 ==0 ){
            oddEven.style.visibility="visible";
            oddEven.innerText="Even";
        }

        else{
            oddEven.style.visibility="visible";
            oddEven.innerText="odd";

        }
        return num1 % num2
    }

    else{
        alert("the symbole you entered isn't right! try again!")
    }
    
}



/* NUMBER 2 GET'S THE PRESENT INPUT VALUE AND THEN THE showResult FUNCTION DISPLAY THE RESULT*/
/* show result */
let number2; 
function showResult(){

    if(number == undefined || enterInput.value.length ==0){
        alert("please enter a number!")
    }

    else{
        number2 = parseInt(enterInput.value);
        enterInput.style.color="green";
        enterInput.value=calcuate(number,number2)
        let theResult=number + " " +  sym1 + " " + number2 + " = " + " " + enterInput.value;
        addToHisotry(theResult)
        enteredNumber.style.visibility="hidden";
        enteredNumber.innerHTML="";
    }
    
}




/*change the font size when the value length is more than 11 or 22*/
function changeFontSize(){
    if (enterInput.value.length >= 11) {
        enterInput.style.fontSize="0.8rem"
       
    }

    if (enterInput.value.length >= 22) {
        enterInput.style.fontSize="0.6rem"
    }
}


/*  clear everything for INPUTS */
function clearEverything(){
    enterInput.value="";
    number=undefined;
    enteredNumber.innerHTML=""
    enteredNumber.style.visibility="hidden";
    enterInput.style.fontSize="1.5rem"
}

/* clear only the input value  */
function clearOnlyInput(){
    enterInput.value="";  
}



/* -------- HISTORY --------  */

/* ADD TO HISTORY BOX  */
function addToHisotry(node){
    const span=document.createElement("span");
    const textNode = document.createTextNode(node);

    /* if the node length be more than 15 it gets a different class*/
    if(node.length > 15){ 
        span.classList.add("bl");
        span.classList.add("topBR");
        span.classList.add("padding5px");
    }

    else{
        span.classList.add("his");
        span.classList.add("topBR");
        span.classList.add("padding5px");
    }
    span.appendChild(textNode);
    historyList.appendChild(span);
}




function displayHistory(){  
    if(mainBox.style.display !="none"){
        mainBox.style.display="none";
        history.style.display="flex";
    }
    else{
        mainBox.style.display="flex";
        history.style.display="none";
    } 
}


/* CLEAR HISTORY */
/* delete all the span elements */
function clearHistory(){
    let len=historyList.childNodes.length;

    while (len != 1){
        historyList.removeChild(historyList.firstElementChild);
    }

}

/* delete from the first element */
function clearHistoryFirst(){
    historyList.removeChild(historyList.firstElementChild);
}



/* FACTORILE */
function test(){
    let x=4;
    let y=1;
    let z=0
}
