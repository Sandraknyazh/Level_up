//первая задача
console.log('Первая задача');
let arr = [];
let sum = 0;
for (let i = 0; i < 3; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    console.log(arr[i]);
    if (arr[i] > 0) {
        sum += arr[i];
    }
}
console.log('сумма равна:', sum);

//вторая задача
console.log('Вторая задача');
let arr1 = [];
let sum1 = 0, mult = 1;
for (let i = 0; i < 3; i++) {
    arr1[i] = Math.floor(Math.random() * 50);
    console.log(arr1[i]);
    sum1 += arr1[i];
    mult *= arr1[i];
}
if (sum1 > mult) {
    sum1 += 3;
    console.log('результат равен ', sum1);
}
else if (mult > sum1) {
    mult += 3;
    console.log('результат равен ', mult);
}
else console.log('проблемс');

//третья задача
console.log('Третья задача');
let arr2 = [];
let x, y;
for (let i = 0; i < 2; i++) {
    arr2[i] = Math.floor(Math.random() * 10);
    console.log(arr2[i]);
}
x = arr2[0];
y = arr2[1];
if (x >= 0 && y >= 0) {
    console.log('Первая четверть');
}
else if (x >= 0 && y <= 0) {
    console.log('Четвертая четверть');
}

else if (x <= 0 && y >= 0) {
    console.log('Вторая четверть');
}

else if (x <= 0 && y <= 0)
    console.log('Третья четверть');

else (Проблемс);

//четвертая задача
console.log('Четвертая задача');
let arr3 = [];
for (let i = 0; i < 5; i++) {
    arr3[i] = Math.floor(Math.random() * 10);
    console.log(arr3[i]);
}
let min = max = arr3[0];
indexMax = indexMin = 0;
for (let j = 1; j < arr3.length; j++) {
    if (arr3[j] > max) {
        max = arr3[j];
        indexMax = j;
    }
    else if (arr3[j] < min) {
        min = arr3[j];
        indexMin = j;
    }
}
console.log('Минимальный элемент и его индекс:', min, indexMin);
console.log('Максимальный элемент и его индекс:', max, indexMax);

//пятая задача
console.log('Пятая задача');
let arr4 = [];
let sum_1 = 0;
for (let i = 0; i < 5; i++) {
    arr4[i] = Math.floor(Math.random() * 10);
    console.log(arr4[i]);
}
for (let j = 0; j < arr4.length; j++) {
    if (j % 2 != 0) {
        sum_1 += arr4[j];
    }
}
console.log('Результат: ', sum_1);