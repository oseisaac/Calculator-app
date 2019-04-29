function getHistory(){
    return document.getElementById("history-value").innerText;
  
}
function printHistory(value){
     document.getElementById("history-value").innerText = value;
}

function getOutput(){
    return document.getElementById("output-value").innerHTML;
}
function printOutput(value){
    if(value == ""){
        document.getElementById("output-value").innerText = value;
        }
    else{
         document.getElementById("output-value").innerText = getFormattedNumber(value);
        }
    }
   
function getFormattedNumber(num){
    if(num == "-"){
        return "";
    }
    // making sure that we  have a number not a string
    num = Number(num);
    return num.toLocaleString('en');
}
function reverseFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
for(let i=0; i < operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id == "clear"){// CLears the whole display
            printHistory("");
            printOutput("");
        }
        
        else if(this.id == "backspace"){// backspace removes the last character
            let output = reverseFormattedNumber(getOutput()) +""; 
            output = output.substring(0,output.length-1);
            printOutput(output);            
        }
        
        else{
            let output = reverseFormattedNumber(getOutput());
            let history = getHistory();
            if(output != ""){
                history = history + output;
                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result); 
                    printHistory("");
                }
                else{
                    history =history + this.id;
                    printHistory(history);
                    printOutput("");
                   
                }
                
            }
           
        }
    })
}

// getting the numbers  when they are clicked
const numbers = document.getElementsByClassName("number");
for(let i=0; i < numbers.length; i++){
    numbers[i].addEventListener('click',function(){
        var output = reverseFormattedNumber(getOutput());
        output += this.id;
        printOutput(output);

    })
}
