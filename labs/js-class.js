///////////////////////////////////////
////Week 3 Day 1 HW

//Create Hamster class
// ----------------------------------

class Hamster {
    constructor(owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeak, squeak")
    }
    eatFood(){
        console.log("nibble")
    }
    getPrice(){
        console.log(`${this.price}`);
        return this.price;
    }
}


// ----------------------------------


const Gus = new Hamster('Vicky', "Gus");

console.log(Gus.owner);
console.log(Gus.name);
console.log(Gus.price);

Gus.getPrice();


//Create Person class
// ----------------------------------


class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0; 
    } 
        getName(){
            console.log(`${this.name}`);
            return this.name;
        }
        getAge(){
            console.log(`${this.age}`);

            return this.age
        }
        getWeight(){
            console.log(`${this.weight}`);
            return this.weight;
        }
        greet(name){
            console.log(`Hello ${name}!`)
        }
        eat(){
            this.weight++;
            this.mood += 1;
        }
        exercise(){
            this.weight--;
        }
        ageUp(){
            this.age += 1;
            this.height +=1;
            this.weight += 1;
            this.mood -= 1;
            this.bankAccount += 10;
        }
        buyHamster(hamster){
            this.hamsters.push(hamster);
            this.mood += 10;
            this.bankAccount -= hamster.getPrice();
        }
}

// ----------------------------------

const vicky = new Person("Vicky");
console.log(vicky)


vicky.ageUp();
console.log(vicky.age);
console.log(vicky)

vicky.eat();
console.log(vicky)

vicky.exercise();
console.log(vicky.weight)

vicky.buyHamster(Gus);
console.log(vicky)



//Create Chef Factory
// ----------------------------------

class Dinner {
    constructor (appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}


class Chef {
    constructor (name) {
        this.name = name;
        this.dinners = [];
    }
    makeDinner(appetizer, entree, dessert){
        const newDinner = new Dinner (appetizer, entree, dessert)
        this.dinners.push(newDinner)
    }
}

const tom = new Chef ('tom')
console.log(tom)

tom.makeDinner('salad', 'steak', 'ice cream')
console.log(tom)