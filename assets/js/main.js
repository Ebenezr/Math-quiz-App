let n1 =  Math.floor(Math.random()*10+1);
let n2 =  Math.floor(Math.random()*10+1);

const msg = document.getElementById('msg');
const inputA =document.getElementById("answ")
document.getElementById("randOne").value = n1;
document.getElementById("randTwo").value = n2;


let ans = n1 + n2;


const compute = () => {
    var a = document.getElementById("answ").value;

    if(a == ans){
        msg.style.color="green";
        document.getElementById('msg').value = "Well Done! Correct answer";
    
        
    } else{
        msg.style.color="red";
        inputA.focus=true;
        document.getElementById('msg').value = `Correct answer is  ${ans}  Try Again...`;
    }
    
    document.getElementById('answ').value = "";
     n1 =  Math.floor(Math.random()*10+1);
     n2 =  Math.floor(Math.random()*10+1);


    document.getElementById("randOne").value = n1;
    document.getElementById("randTwo").value = n2;

     ans = n1 + n2;

}