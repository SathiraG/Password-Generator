let btn = document.getElementById("btn");
let input = document.getElementById("input");

// Uppercase letters array
let uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Lowercase letters array
let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Numbers array
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Symbols array
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=','.', '<', '>', '?'];

let password = ""

btn.addEventListener("click", function Generate(){

    let characterCount = input.value;
    for (let i = 0; i < characterCount ; i++){
        

        let arrayNo = Math.floor(Math.random() * 4)
        if(arrayNo == 0){
            let x = Math.floor(Math.random() * uppercaseLetters.length)
            password += uppercaseLetters[x]
        }else if(arrayNo == 1){
            x = Math.floor(Math.random() * lowercaseLetters.length)
            password += lowercaseLetters[x]
        }else if (arrayNo == 2){
            x = Math.floor(Math.random() * numbers.length)
            password += numbers[x]
        }else{
            x = Math.floor(Math.random() * symbols.length)
            password += symbols[x]

        }

        console.log(password)
    }
    console.log("The Password is : " + password)
    
})

