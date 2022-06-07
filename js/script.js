//1)

let food = [
    { name: ' ORANGE', price: 500, isFruit: true }, { name: 'burger', price: 100, isFruit: false }, { name: 'watermelon', price: 210, isFruit: false }, { name: 'toast', price: 350, isFruit: false }, { name: 'apple ', price: 140, isFruit: true }, { name: ' bAn ana', price: 380, isFruit: true },
];

function getFruitNamesUpperTwoHundred(food) {
    let fruitNames = [];
    food.forEach(({ price, isFruit, name }) => {
        if (price > 200 && isFruit) {
            fruitNames.push(name.toLowerCase().trim().replace("", ""));
        };
    });
    return fruitNames;
}
let result = getFruitNamesUpperTwoHundred(food);
console.log(result);




//2)

let salary = [1000, 500, 1200, 230];

const newOrder = (arr) => {
    const copyArr = arr.slice();
    copyArr.sort((a, b) => a - b);

    copyArr.reverse();

    return copyArr;
};

console.log(newOrder(salary));

//3)

let serials = ['How i met your mom', 'Friends', 'Big bang theory'];

console.log(serials.join(' '));

//4)
let product = [
    { name: ' ORANGE', price: 500, isFruit: true },
    { name: 'burger', price: 100, isFruit: false },
    { name: 'watermelon', price: 210, isFruit: false },
    { name: 'toast', price: 350, isFruit: false },
    { name: 'apple ', price: 140, isFruit: true },
    { name: ' bAn ana', price: 380, isFruit: true },
];

const calcSum1 = (arr) => {
    return arr.reduce((result, fruitObj) => result + fruitObj.price, 0);
};

const calcSum2 = (arr) => {
    let result = 0;

    arr.forEach((fruitObj) => {
        result += fruitObj.price;
    });

    return result;
};

console.log('calcSum1', calcSum1(product));
console.log('calcSum1', calcSum2(product));