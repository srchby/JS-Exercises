function thistest() {
    console.log(this);
}

thistest()

const people = {
    thistest: function () {
        console.log (this);
    }
}

const animal = {};

thistest.bind(animal)

const humanoid = {
    thistest: () => {
        console.log (this);
    }
}

const human = new Object(); // Object constructor

const geese = {
    dna: 'AAADCCCDDCDC',
    name: 'geese goose',
    born: Date.now(),
    quak() {
        console.log('quack quack');
    }
}

human.__proto__.__proto__;

Object.getPrototypeOf(human);

const list = ["human", "dog", "cat"]

const sett = new Set(list)

// new creates instance

const mapp = new Map([
    ['human', 1],
    ['dog', 2],
    ['cat', 3],
]);

setTimeout(() => {
    console.log('5 seconds after');
}, 5000);

// breaks synchronous reading

const promise = new Promise(
    (resolve,reject) => {
        if (reading) {
            resolve('yes')
        } else {
            reject('no')
        }
        //.then and .catch do the same
    }
)

async function asynctest() {
    const result = await promise;
}
//self explanatory

