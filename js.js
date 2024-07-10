let emi=0;
let inputs=document.querySelectorAll("input");
let reset=document.querySelector("#reset");
let calculate=document.querySelector("#calculate");
let output=document.querySelector(".emi");
console.log(output)
  
function calculateemi(){
    let tenure= Number(inputs[2].value)*12 + Number(inputs[3].value);
let principal=Number(inputs[0].value);
let interest=Number(inputs[1].value)/1200;
    emi=(principal*interest*(1+interest)**tenure)/(((1+interest)**tenure)-1);
    console.log(emi);
}
function checkvalidity(){
    if(inputs[0].value===""||inputs[0].value==="0"){
        return false;
        }
for (const input of inputs) {
    if(input.value<0){
        return false;
    }
}
return true;
}

reset.addEventListener("click", ()=>{
    for (const input of inputs) {
        input.value="";
    }
    output.innerText="Rs.0"
    output.style.color="#00246B"
})

calculate.addEventListener("click", ()=>{
    console.log(checkvalidity())
   if(checkvalidity()){
    calculateemi();
    output.style.color="#00246B"
    output.innerText="Rs."+emi.toFixed(2);
   }
   else{
    output.innerText="Invalid Inputs";
    output.style.color="red"
   }
})




