// Shaheer  Shahzad
// Date: February 16, 2024


//  Assigment 2

// initilizing person_name variable with string then printing the value of variable
let person_name: string = 'Orhan';
console.log(`Hello ${person_name}, would you like to learn some Python today? \n`);


//  Assigment 3
// creating a function for converting text to title case then consoling it
function toTitleCase(name: string): string {
    return name.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ')
}

console.log(`\n ${person_name.toUpperCase()}  ${person_name.toLowerCase()}  ${toTitleCase(person_name)}`);

//  Assigment 4
// printing the quote of Favorite Personality
console.log(`Andrew Tate once said, “Freedom will only come when you no longer trade your time for money.”`)

//  Assigment 5
// initilizing message and famous_person variable
let message: string = '“Do the impossible and you’ll never doubt yourself ever again.”'
let famous_person: string = 'Andrew Tate'
// printing the message and famous_person in the console
console.log(`${famous_person} once said, ${message}`)

//  Assigment 6
// print the value with and without space
let personName: string = '\tBabar Azam\n \n';
console.log(`${personName} ${personName.trim()}`)

// Assignment 7

// Addition operation resulting in 8
console.log("Addition:", 5 + 3);
// Subtraction operation resulting in 8
console.log("Subtraction:", 17 - 9);
// Multiplication operation resulting in 8
console.log("Multiplication:", 4 * 2);
// Division operation resulting in 8
console.log("Division:", 24 / 3);

// Assignment 8

// consoling 5 + 3 four time
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);

// Assignment 9

// initilizing favorite_number and printing it
let favorite_number: number = 10

console.log(`My favorite number is ${favorite_number}`)


// Assignment 11
let names: string[] = ['Osman', 'Orhan', 'Alauddin'];
names.forEach((element: string) => {
    console.log(`${element}.`)
})

// Assignment 12
names.forEach((element: string) => {
    console.log(`Assalam u Alikum ${element}.`)
})

//  Assignment 13
let vehicles: string[] = ["Ferrari 488 GTB", "Lamborghini Aventador SVJ", "Bugatti Chiron Super Sport 300+", "Yamaha YZF-R1M"]

vehicles.forEach((element: string) => {
    console.log(`I would like to own a ${element}.`)
})

// Assignment 14

let guest_List = ['Atif', 'Talha', 'Ali', 'Hammad', 'Asad', 'Ahmed Hamza'];

guest_List.forEach((element: string) => {
    console.log(`I would like to invite you to dinner, ${element}.`)
})


// Assignment 15

console.log('stating the name of the guest who can’t make it.')

let index: number = guest_List.indexOf("Asad");
if (index !== -1) {
    guest_List[index] = "Ali"; // Invite someone else
}

// Print the updated guest list
guest_List.forEach(element => {
    console.log(`I would like to invite you to dinner, ${element}.`)
});

//  Assignment 16
let updatedGuest = [...guest_List]

console.log('Hey Guys I found a bigger dinner table')

updatedGuest.push('Abdul Rehman');
updatedGuest.unshift('Abdur Razzaq')
let middle_index: number = Math.floor(updatedGuest.length / 2);

// Add a new guest in the middle of the array
updatedGuest.splice(index, 0, "Abdul Samad");


console.log('updated Guest list with new guests', updatedGuest)

// Assignment 17
console.log('Sorry I can invite only two people for dinner.')

for (let index = updatedGuest.length - 1; index > -1; index--) {
    const element = guest_List[index];

    if (index <= 1) {
        console.log(`you are still invited to dinner, ${element}.`)
        updatedGuest.pop()
    } else {
        console.log(`Sorry I can't invite you to the dinner, ${element}.`);
        updatedGuest.pop()
    }

}


console.log('Emptied List', updatedGuest)

// Assignment 18

// Define the array of places
let places: string[] = ["Tokyo", "Dubai", "Paris", "Hunza", "New York City"];

// Print the original order
console.log("Original order:");
console.log(places);

// Print the list in alphabetical order without modifying the original list
console.log("Alphabetical order:");
console.log([...places].sort());

// Print to show the original order is unchanged
console.log("Original order after sorting:");
console.log(places);

// Print the list in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:");
console.log([...places].sort().reverse());

// Print to show the original order is unchanged
console.log("Original order after reverse sorting:");
console.log(places);

// Reverse the order of the list
places.reverse();

// Print to show the order has changed
console.log("Reversed order:");
console.log(places);

// Reverse the order of the list again to return to original order
places.reverse();

// Print to show it's back to original order
console.log("Original order after reversing again:");
console.log(places);

// Sort the array in alphabetical order
places.sort();

// Print to show the order has changed
console.log("Sorted in alphabetical order:");
console.log(places);

// Sort the array in reverse alphabetical order
places.sort((a, b) => b.localeCompare(a));

// Print to show the order has changed
console.log("Sorted in reverse alphabetical order:");
console.log(places);

// Assignment 19

console.log(`You are inviting ${guest_List.length} people to dinner.`);

// Assignment 20
let countries: string[] = ['PAKISTAN', 'PALESTINE', 'UK', 'CANADA', 'AUSTRALIA', 'USA', 'FRANCE', 'GERMANY'];

console.log(countries);

// Assignment 21

interface Cars {
    brand: string
    model: string
    year: number
    price: number
}

let cars: Cars[] = [
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2021,
        price: 30000,
    },
    {
        brand: 'Honda',
        model: 'Civic',
        year: 2020,
        price: 25000
    },
    {
        brand: 'Nissan',
        model: 'Altima',
        year: 2019,
        price: 20000
    },
]
console.log(cars)

// Assignment 22

let car_array_prototypes: string[] = ['brand', 'model', 'year', 'price']

console.log('Producing Array Indeing Error', car_array_prototypes[4])

console.log('Error Resolved', car_array_prototypes[3])

// Assignment 23

console.log("famous_person is initialized with Andrew Tate ", famous_person === 'Andrew Tate')
console.log("car_array_prototypes includes 'year'? prediction True.", car_array_prototypes.includes('year'))
console.log("car_array_prototypes includes 'brand'? prediction True.", car_array_prototypes.includes('brand'))
console.log('Countries Array includes PAKISTAN', countries.includes('PAKISTAN'))
console.log('guest_List.length is 6, prediction is true.', guest_List.length === 6)



console.log("car_array_prototypes includes 'name'? prediction False.", car_array_prototypes.includes('name'))
console.log('Countries Array includes AFGHANISTAN ,prediction is false', countries.includes('AFGHANISTAN'))
console.log('guest_List.length is 5, prediction is false.', guest_List.length === 5)
console.log('Places Array includes Larkana ,prediction is false', places.includes('Larkana'))
console.log('The Result for 8+9 is not 17, prediction is false.', 8 + 9 !== 17)


// Assignment 24


// Tests for equality and inequality with strings
let string1: string = "apple";
let string2: string = "orange";

console.log('The answer is True', string1 === "apple");
console.log('The answer is True', string1 !== string2);

// Tests using the lower case function
let str1: string = "Hello";
let str2: string = "hello";

console.log('The answer is True', str1.toLowerCase() === str2);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1: number = 10;
let num2: number = 5;

console.log('The answer is True', num1 === 10);
console.log('The answer is True', num1 !== num2);
console.log('The answer is True', num1 > num2);
console.log('The answer is True', num1 < num2);
console.log('The answer is True', num1 >= num2);
console.log('The answer is True', num1 <= num2);

// Tests using "and" and "or" operators
let x: number = 10;
let y: number = 5;
let z: number = 15;

console.log('The answer is True', x > y && x < z);
console.log('The answer is False', x < y || x > z);


console.log('Test whether an item is in an array')
let fruits: string[] = ["apple", "banana", "orange"];
console.log('The answer is True', fruits.includes("banana"));

console.log('Test whether an item is not in an array')
console.log('The answer is True', !fruits.includes("grape"));



// Assignment 25


let alien_color: string = 'green'

if (alien_color === 'green') {
    console.log('The player just earned 5 points.')
}
let alien_second_color: string = 'red'

if (alien_second_color === 'green') {
    console.log('The player just earned 5 points.')
}

// Assignment 26

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
if (alien_color !== 'green') {
    console.log("Player just earned 10 points.");
}




if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else {
    console.log("Player just earned 10 points.");
}


// Assignment 27
alien_color = 'green';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}

alien_color = 'red';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}

alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
} else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}

// Assignment 28

let persons_age: number = 18;

if (persons_age < 2) {
    console.log("The person is a baby.");
} else if (persons_age >= 2 && persons_age < 4) {
    console.log("The person is a toddler.");
} else if (persons_age >= 4 && persons_age < 13) {
    console.log("The person is a kid.");
} else if (persons_age >= 13 && persons_age < 20) {
    console.log("The person is a teenager.");
} else if (persons_age >= 20 && persons_age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// Assignment 29

// Array of favorite fruits
let favorite_fruits: string[] = ["Kiwi", "apple", "strawberry"];

// Check for certain fruits in the array
if (favorite_fruits.includes("Kiwi")) {
    console.log("You really like Kiwi!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}

// Assignment 30

let users: string[] = ["Edward", "Admin", 'Ahmed', 'Ali', 'Asad'];

users.forEach(element => {
    console.log(element === 'Admin' ? `Hello ${element}, would you like to see a status report?` : `Hello ${element},thank you for logging in again`)
});


// Assignment 31
users = []
if (users.length == 0) {
    console.log('We need to find some users!')
}


// Assignment 32

let current_users: string[] = ["john", "jack", "alice", "jammy", "lisa"];

let new_users: string[] = ["alice", "david", "JACK", "frank", "jane"];

// Loop through new_users list
new_users.forEach(new_user => {
    let usernameExists: string = current_users.find(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`The username "${new_user}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
});


// Assignment 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


numbers.forEach(number => {
    let ordinalEnding: string;
    if (number === 1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = "nd";
    } else if (number === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${number}${ordinalEnding}`);
});


// Assignment 34

let pizzas: string[] = ["chicken tikka", "Spicy Ranch", "Chicken Fajita"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("I really love pizza!");

// Assignment 35

let animals: string[] = ["Dog", "Cat", "Rabbit"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}

console.log("These animals are all mammals.");

// Assignment 36 and 37

function make_shirt(size: string = 'L', message: string = 'I love TypeScript') {
    console.log('The size of the shirt is ' + size);
    console.log('The message printed on the shirt is ' + message);
}



make_shirt('XXL', 'Welcome to TypeScript')


make_shirt("M")
make_shirt("S", "I love JavaScript")


// Assignment 38

function describe_city(name: string, country: string = "Pakistan") {
    console.log(`${name} is in ${country}`);
}

describe_city("Lahore")
describe_city('Karachi')
describe_city('WashingTon DC', 'USA')


// Assignment 39

function city_country(city: string, country: string) {
    console.log(`${city}, ${country}`);
}

city_country('Islamabad', 'Pakistan')
city_country('Kolkata', 'India')
city_country('WashingTon DC', 'USA')


// Assignment 40
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

console.log(make_album('Michael Jackson', 'Thriller'));
console.log(make_album("Artist 2", "Album 2", 10));

//  Assignment 41, 42, 43
function show_magicians(names: string[]) {
    names.forEach((element: string) => {
        console.log(element);
    })
}
let original_magicians: string[] = ["Merlin", "Gandalf", "Harry Potter"];
show_magicians(original_magicians)

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}
let great_magicians: string[] = make_great([...original_magicians]);

show_magicians(original_magicians);

show_magicians(great_magicians);


// Assignment 44

function sandwich(...items: string[]) {
    if (items.length === 0) {
        console.log('Its an empty sandwich')
    } else {
        console.log('You Ordered the sandwich with following items:')
        items.forEach((element: string) => {
            console.log("-", element)
        })
    }
}


sandwich('Tomato', 'lettuce', 'cheese')
sandwich('lettuce', 'cheese', 'onion', 'Tomato')
sandwich('jalapeno', 'thousand Island', 'chicken', 'lettuce', 'cheese', 'onion', 'Tomato')



// Assignment 45

function storeCarInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): object {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Iterate over each option and add it to the carInfo object
    options.forEach(option => {
        const key = Object.keys(option)[0]; // Extract the key
        const value = option[key]; // Extract the value
        carInfo[key] = value; // Add the key-value pair to the carInfo object
    });

    return carInfo;
}

// Call the function with required information and additional name-value pairs
const car = storeCarInfo("Toyota", "Camry", { color: "blue" }, { optionalFeature: "sunroof" });

// Print the object returned by the function
console.log(car);

