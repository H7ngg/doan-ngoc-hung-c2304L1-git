//bai2

function calculateExpression(x, y, z) {
    return 3 * x**2 - 5 * x * y + z**4;
}

const x = 5;
const y = 1;
const z = 2;

const result = calculateExpression(x, y, z);
console.log("Result:", result);

//bai3
const arr = [5, 1, 4, 2, 7];

function printArray(arr) {
    for (let element of arr) {
        console.log(element);
    }
}

console.log("Danh sách các phần tử của mảng:");
printArray(arr);



