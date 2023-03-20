function getNumbers(){

    // retrieves an input element from the html document then retrieves the value of the first element which
    // is as per the the value split rule here is assumed to be split using commas and then converts each string into
    // an integer using parseint. the resulting integers is assinged the numbers constant 


    const numbers = document.getElementById('input').querySelector('input').value.split(",").map(num => parseInt(num));
    const roundedAverage = Math.round(numbers.reduce((acc,curr) => acc + curr) / numbers.length);
    const min = Math.min (...numbers);
    const max = Math.max (...numbers);
    document.getElementById('result').innerHTML = `the rounded average of the numbers is ${roundedAverage} <br> the minimum number is ${min} and the maximum number given is ${max}`
}

// what you just saw there was me troubleshooting this error and the error that i had was i doubled the numbers.reduce which just adds everything in the array so it just errors out 
// because of wrong syntax.