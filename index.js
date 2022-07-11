function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    return function namedFn() {
        console.log("before all");
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('I am anonymous.')
    }
}

//const returnsAnAnonymousFunction = function() {return returnsAnAnonymousFunction};