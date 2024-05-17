
//heihgt input
let input1 = document.querySelector('#hIn')
// weight input
let input2 = document.querySelector('#wIn')
// BMI calculation
let answer1 = document.querySelector('.bmiAns')
// clear button
let ac = document.getElementById('clr')

calc.addEventListener('click',()=>{
    let bmi = input2.value / (input1.value*input1.value);
    // change result to two decimals
    let formattedBMI = bmi.toFixed(2);
    // Display changed BMI
    answer1.innerText = formattedBMI;
})

ac.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    input1.value = '';
    input2.value = '';
    answer1.innerText ='';
}