function getNumbers() {
    const numbers = document.getElementById('input').querySelector('input').value.split(",").map(num => parseInt(num));
    const roundedAverage = Math.round(numbers.reduce((acc, curr) => acc + curr) / numbers.length);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    document.getElementById('result').innerHTML = `The rounded average of the numbers is ${roundedAverage} <br> The minimum number is ${min} <br> The maximum number is ${max}`;

}

