function myEach(input, f) {
    let data = input
    if (!Array.isArray(input)) {
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < data.length; i++){
        f(data[i])
    }
    return input
}

// console.log(myEach([1, 2, 3], alert))

// console.log(myEach({one: 1, two: 2, three: 3}, alert))

function myMap(input, f) {
    let data = input
    const result = []
    if (!Array.isArray(input)) {
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < data.length; i++){
        result.push(f(data[i]))
    }
    return result
}

// console.log(myMap([1, 2, 3], function(num){ return num * 3; }))

// console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }))

function myReduce(input, f, start = 0) {
    let data = input
    let total = start
    if (!Array.isArray(input)) {
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < data.length; i++){
        total = (f(total, data[i]))
    }
    return total
}

// let r1 = myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);

// let r2 = myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });

function myFind(input, f) {
    let data = input
    if (!Array.isArray(input)){
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < data.length; i++){
        if (f(data[i])) return data[i]
    }
}

// let r1 = myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });


// let r2 = myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });

function myFilter(input, f) {
    let data = input
    const result = []
    if (!Array.isArray(input)){
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < data.length; i++){
        if (f(data[i])) result.push(data[i])
    }
    return result
}

// r1 = myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

// r2 = myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })

function mySize(input) {
    let data = input
    if (!Array.isArray(input)){
        data = Array.from(Object.values(input))
    }
    return data.length
}

// r1 = mySize({one: 1, two: 2, three: 3});

// r2 = mySize([]);

function myFirst(input, length = 1) {
    let data = input
    let result = []
    if (!Array.isArray(input)){
        data = Array.from(Object.values(input))
    }
    for (let i = 0; i < length; i++){
        result.push(data[i])
    }
    return result = result.length === 1 ? result[0] : result
}

// r1 = myFirst([5, 4, 3, 2, 1]);

// r2 = myFirst([5, 4, 3, 2, 1], 3);

function myLast(input, length = 1) {
    let data = input
    let result = []
    if (!Array.isArray(input)){
        data = Array.from(Object.values(input))
    }
    for (let i = data.length - length; i < data.length; i++){
        result.push(data[i])
    }
    return result = result.length === 1 ? result[0] : result
}

// r1 = myLast([5, 4, 3, 2, 1]);

// r2 = myLast([5, 4, 3, 2, 1], 3);

function mySortBy(input, f) {
    const result = [...input]
    if (Array.isArray(result[0])){
        return result.sort((a, b) => f(a) - f(b))
    }
    return result.sort((a, b) => {
        if (f(a) > f(b)){
            return 1
        } else if (f(a) < f(b)){
            return -1
        } else {
            return 0
        }
    })
}

r1 = mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) });

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
r2 = mySortBy(stooges, function(stooge){ return stooge.name });