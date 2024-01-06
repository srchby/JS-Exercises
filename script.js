let num = 10;

let test;

console.log(test);

num = null;

const name = 'test';

var variable = 'lorem ipsum';

function abc() {
    let test = 'a';
    let test1 = 'b';

    if (true) {
        let test = 'one';
        let test1 = 'two';

        return console.log(test + test1);   
    }
}

function add(a, b) {

    return console.log(a + b);
}

add(1, 2)

abc()

const omen = function(a, b) {
    return console.log(a + b)
}

function funcs(test) {
    return test();
    }
    return function (){

    }

function closure() {
    let a = 10;
    return function () {
        a++
        return a;
    }
}

