function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
let array = [1, 6, 3, 7, 5];
let sum = calculateSum(array);
document.querySelector('.result').textContent = `Sum: ${sum}`;