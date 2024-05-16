// 1. Print 1 - 135
for (let i = 1; i <= 135; i++) {
    console.log(i);
}

// 2. Print Odd Numbers 1 - 135
for (let i = 1; i <= 135; i+=2) {
    console.log(i);
}

// 3. Sum of Printed Numbers
let sum = 0;
for (let i = 1; i <= 135; i++) {
    sum += i;

    console.log(`Number is: ${i} Sum: ${sum}`);
}

// 4. Print the elements of an array
let X = [1,4,2,12];
for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
}

// 5. Find Max
X = [2,-3,-1];
let max;

for (let i = 0; i < X.length; i++) {
    if (max === undefined) {
        max = i;
    }

    if (i > max) {
        max = i;
    }
}
console.log('max: ', max);


// 6. Get Average
X = [2,1,3];
sum = 0;
for (let i = 0; i < X.length; i++) {
    sum += X[i];
}
console.log(sum / X.length);

// 7. Eliminate the Negatives
X = [2,-1,4,-3];
for (let i = 0; i < X.length; i++) {
    if (X[i] < 0) {
        X[i] = 0;
    }
}

// 8. Number to String
let x = [1,-4,0,-1];
for (let i = 0; i < x.length; i++) {
    if (x[i] < 0) {
        x[i] = 'Turing';
    }
}