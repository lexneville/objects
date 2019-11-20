// //--------------------------------- OBJECTS ----------------------------------------------

// let playerStats = {
//     name: "Garth Worldly",  // This is a key-value pair. name = key, "Garth Worldly" = value
//     Age: 26,
//     hp: 100,
//     attackStrength: 25,
//     defense: 50,
//     speed: 20,
// }

// let movie = {
//     name: "Terminator",
//     mainActor: "Arnie",
//     support: ["Michael Biehn", "Linda Hamilton", "Bill Paxton", "Earl Boen"], // Objects can store full arrays
//     released: 1983,
//     revenue: 440000000,
// }

// console.log(movie.mainActor);  // Different syntax can access the information stored within an object
// console.log(movie["mainActor"]);  

// console.log(playerStats.name);
// console.log(playerStats["name"]);

// console.log(movie.support[1]);
// console.log(movie["support"][1]);

// movie.mainActor = "Schwarzenegger"; // Changing the value associated with a key stored in an object
// console.log(movie.mainActor);

// movie.rating = 5; // This line adds a key-value pair with a key of 'rating' and a value of '5'
// console.log(movie.rating);
// console.log(movie); // Logs the entire object to the console


// //------------------ ACTIVITY ---------------------------

// let person = {
//     name: "Jody",
//     age: 40,
//     sayHi() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// person.sayHi();

// //--------------------- ACTIVITY --------------------------

// let day = "Monday";

// let alarmObj = {
//     weekendAlarm: "no alarm needed.",
//     weekdayAlarm: "get up at 7am.",
// }

// if (day == "Saturday" || day == "Sunday") {
//     console.log(`It's ${day}, ${alarmObj.weekendAlarm}`);
// } else {
//     console.log(`It's ${day}, ${alarmObj.weekdayAlarm}`);
// }

// let employee = {
//     name: "Christino Ronaldo",
//     company: "Manchester United",
//     yearsWorking: 12,
//     salary: 1000000,
//     play: function() {        // First method of creating a function within an object
//         console.log(`${this.name} is the best striker in the PL.`)    // There are two different ways of calling a key value   this.name references a key within THIS particular object
//     },
//     resting() {               // Second shorthand way of creating a function within an object
//         console.log(`${this.name} is resting`)
//     },
//     checkSalary() {           // Do not use arrow function syntax within an object as any THIS calls will only relate to that function, rather than the whole object
//         console.log(`${employee.name} is earning £${employee.salary}/week`)        // Second method of calling a key value within an object
//     }
// }

// employee.play();
// employee.resting();
// employee.checkSalary();

// //------------------------ ACTIVITY ---------------------------

// let pet = {
//     name: "Jaws",
//     typeOfPet: "Goldfish",
//     age: 5,
//     colour: "Black",
//     eat() {
//         console.log(`${this.name} is eating`)
//     },
//     drink() {
//         console.log(`${this.name} is drinking`)
//     },
// } 
// pet.drink();
// pet.eat();

// //------------------------ ACTIVITY ----------------------------

let order = [];

let coffeeShop = {
    branch: "Northern Quarter",
    coffee: 2,
    juice: 1,
    sandwich: 3,
    muffin: 1,
    drinksOrdered() {
        console.log(``)
    },
    foodOrdered() {
        console.log(``) 
    },
}

// //---------------------------- OBJECTS CATCH-UP -----------------------------------

// let drinks = {
//     wine: {
//         porto: {
//             price: 12,
//             region: "Portugal",
//         },
//         Merlot: {
//             price: 15,
//             region: "France",
//         },
//     },
//     spirits: ["Remy Martin", "Jack Daniels", "Smirnoff"],
// }

// console.log(drinks.wine.Merlot.price);
// console.log(drinks["wine"]["porto"]["region"]);
// console.log(drinks.spirits[0]);
