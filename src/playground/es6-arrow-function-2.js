//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};

// this keyword -- no longer bound

const user = {
    name: 'Gerald',
    cities: ['Dubai','Sydney','Canberra'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());


//Challenge

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());