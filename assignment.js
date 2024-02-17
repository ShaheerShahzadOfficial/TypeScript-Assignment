var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var person_name = 'Orhan';
console.log("Hello ".concat(person_name, ", would you like to learn some Python today? \n"));
function toTitleCase(name) {
    return name.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}
console.log("\n ".concat(person_name.toUpperCase(), "  ").concat(person_name.toLowerCase(), "  ").concat(toTitleCase(person_name)));
console.log("Andrew Tate once said, \u201CFreedom will only come when you no longer trade your time for money.\u201D");
var message = '“Do the impossible and you’ll never doubt yourself ever again.”';
var famous_person = 'Andrew Tate';
console.log("".concat(famous_person, " once said, ").concat(message));
var personName = '\tBabar Azam\n \n';
console.log("".concat(personName, " ").concat(personName.trim()));
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 17 - 9);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 24 / 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
var favorite_number = 10;
console.log("My favorite number is ".concat(favorite_number));
var names = ['Osman', 'Orhan', 'Alauddin'];
names.forEach(function (element) {
    console.log("".concat(element, "."));
});
names.forEach(function (element) {
    console.log("Assalam u Alikum ".concat(element, "."));
});
var vehicles = ["Ferrari 488 GTB", "Lamborghini Aventador SVJ", "Bugatti Chiron Super Sport 300+", "Yamaha YZF-R1M"];
vehicles.forEach(function (element) {
    console.log("I would like to own a ".concat(element, "."));
});
var guest_List = ['Atif', 'Talha', 'Ali', 'Hammad', 'Asad', 'Ahmed Hamza'];
guest_List.forEach(function (element) {
    console.log("I would like to invite you to dinner, ".concat(element, "."));
});
console.log('stating the name of the guest who can’t make it.');
var index = guest_List.indexOf("Asad");
if (index !== -1) {
    guest_List[index] = "Ali";
}
guest_List.forEach(function (element) {
    console.log("I would like to invite you to dinner, ".concat(element, "."));
});
var updatedGuest = __spreadArray([], guest_List, true);
console.log('Hey Guys I found a bigger dinner table');
updatedGuest.push('Abdul Rehman');
updatedGuest.unshift('Abdur Razzaq');
var middle_index = Math.floor(updatedGuest.length / 2);
updatedGuest.splice(index, 0, "Abdul Samad");
console.log('updated Guest list with new guests', updatedGuest);
console.log('Sorry I can invite only two people for dinner.');
for (var index_1 = updatedGuest.length - 1; index_1 > -1; index_1--) {
    var element = guest_List[index_1];
    if (index_1 <= 1) {
        console.log("you are still invited to dinner, ".concat(element, "."));
        updatedGuest.pop();
    }
    else {
        console.log("Sorry I can't invite you to the dinner, ".concat(element, "."));
        updatedGuest.pop();
    }
}
console.log('Emptied List', updatedGuest);
var places = ["Tokyo", "Dubai", "Paris", "Hunza", "New York City"];
console.log("Original order:");
console.log(places);
console.log("Alphabetical order:");
console.log(__spreadArray([], places, true).sort());
console.log("Original order after sorting:");
console.log(places);
console.log("Reverse alphabetical order:");
console.log(__spreadArray([], places, true).sort().reverse());
console.log("Original order after reverse sorting:");
console.log(places);
places.reverse();
console.log("Reversed order:");
console.log(places);
places.reverse();
console.log("Original order after reversing again:");
console.log(places);
places.sort();
console.log("Sorted in alphabetical order:");
console.log(places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order:");
console.log(places);
console.log("You are inviting ".concat(guest_List.length, " people to dinner."));
var countries = ['PAKISTAN', 'PALESTINE', 'UK', 'CANADA', 'AUSTRALIA', 'USA', 'FRANCE', 'GERMANY'];
console.log(countries);
var cars = [
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
];
console.log(cars);
var car_array_prototypes = ['brand', 'model', 'year', 'price'];
console.log('Producing Array Indeing Error', car_array_prototypes[4]);
console.log('Error Resolved', car_array_prototypes[3]);
console.log("famous_person is initialized with Andrew Tate ", famous_person === 'Andrew Tate');
console.log("car_array_prototypes includes 'year'? prediction True.", car_array_prototypes.includes('year'));
console.log("car_array_prototypes includes 'brand'? prediction True.", car_array_prototypes.includes('brand'));
console.log('Countries Array includes PAKISTAN', countries.includes('PAKISTAN'));
console.log('guest_List.length is 6, prediction is true.', guest_List.length === 6);
console.log("car_array_prototypes includes 'name'? prediction False.", car_array_prototypes.includes('name'));
console.log('Countries Array includes AFGHANISTAN ,prediction is false', countries.includes('AFGHANISTAN'));
console.log('guest_List.length is 5, prediction is false.', guest_List.length === 5);
console.log('Places Array includes Larkana ,prediction is false', places.includes('Larkana'));
console.log('The Result for 8+9 is not 17, prediction is false.', 8 + 9 !== 17);
var string1 = "apple";
var string2 = "orange";
console.log('The answer is True', string1 === "apple");
console.log('The answer is True', string1 !== string2);
var str1 = "Hello";
var str2 = "hello";
console.log('The answer is True', str1.toLowerCase() === str2);
var num1 = 10;
var num2 = 5;
console.log('The answer is True', num1 === 10);
console.log('The answer is True', num1 !== num2);
console.log('The answer is True', num1 > num2);
console.log('The answer is True', num1 < num2);
console.log('The answer is True', num1 >= num2);
console.log('The answer is True', num1 <= num2);
var x = 10;
var y = 5;
var z = 15;
console.log('The answer is True', x > y && x < z);
console.log('The answer is False', x < y || x > z);
console.log('Test whether an item is in an array');
var fruits = ["apple", "banana", "orange"];
console.log('The answer is True', fruits.includes("banana"));
console.log('Test whether an item is not in an array');
console.log('The answer is True', !fruits.includes("grape"));
var alien_color = 'green';
if (alien_color === 'green') {
    console.log('The player just earned 5 points.');
}
var alien_second_color = 'red';
if (alien_second_color === 'green') {
    console.log('The player just earned 5 points.');
}
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
if (alien_color !== 'green') {
    console.log("Player just earned 10 points.");
}
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
else {
    console.log("Player just earned 10 points.");
}
alien_color = 'green';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}
alien_color = 'red';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}
alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Player just earned 5 points.");
}
else if (alien_color === 'yellow') {
    console.log("Player just earned 10 points.");
}
else if (alien_color === 'red') {
    console.log("Player just earned 15 points.");
}
var persons_age = 18;
if (persons_age < 2) {
    console.log("The person is a baby.");
}
else if (persons_age >= 2 && persons_age < 4) {
    console.log("The person is a toddler.");
}
else if (persons_age >= 4 && persons_age < 13) {
    console.log("The person is a kid.");
}
else if (persons_age >= 13 && persons_age < 20) {
    console.log("The person is a teenager.");
}
else if (persons_age >= 20 && persons_age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
var favorite_fruits = ["Kiwi", "apple", "strawberry"];
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
var users = ["Edward", "Admin", 'Ahmed', 'Ali', 'Asad'];
users.forEach(function (element) {
    console.log(element === 'Admin' ? "Hello ".concat(element, ", would you like to see a status report?") : "Hello ".concat(element, ",thank you for logging in again"));
});
users = [];
if (users.length == 0) {
    console.log('We need to find some users!');
}
var current_users = ["john", "jack", "alice", "jammy", "lisa"];
var new_users = ["alice", "david", "JACK", "frank", "jane"];
new_users.forEach(function (new_user) {
    var usernameExists = current_users.find(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); });
    if (usernameExists) {
        console.log("The username \"".concat(new_user, "\" is not available. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
});
var pizzas = ["chicken tikka", "Spicy Ranch", "Chicken Fajita"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza."));
}
console.log("I really love pizza!");
var animals = ["Dog", "Cat", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
console.log("These animals are all mammals.");
function make_shirt(size, message) {
    if (size === void 0) { size = 'L'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log('The size of the shirt is ' + size);
    console.log('The message printed on the shirt is ' + message);
}
make_shirt('XXL', 'Welcome to TypeScript');
make_shirt("M");
make_shirt("S", "I love JavaScript");
function describe_city(name, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(name, " is in ").concat(country));
}
describe_city("Lahore");
describe_city('Karachi');
describe_city('WashingTon DC', 'USA');
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country('Islamabad', 'Pakistan');
city_country('Kolkata', 'India');
city_country('WashingTon DC', 'USA');
function make_album(artist, title, tracks) {
    var album = {
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
function show_magicians(names) {
    names.forEach(function (element) {
        console.log(element);
    });
}
var original_magicians = ["Merlin", "Gandalf", "Harry Potter"];
show_magicians(original_magicians);
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var great_magicians = make_great(__spreadArray([], original_magicians, true));
show_magicians(original_magicians);
show_magicians(great_magicians);
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log('Its an empty sandwich');
    }
    else {
        console.log('You Ordered the sandwich with following items:');
        items.forEach(function (element) {
            console.log("-", element);
        });
    }
}
sandwich('Tomato', 'lettuce', 'cheese');
sandwich('lettuce', 'cheese', 'onion', 'Tomato');
sandwich('jalapeno', 'thousand Island', 'chicken', 'lettuce', 'cheese', 'onion', 'Tomato');
function storeCarInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        var value = option[key];
        carInfo[key] = value;
    });
    return carInfo;
}
var car = storeCarInfo("Toyota", "Camry", { color: "blue" }, { optionalFeature: "sunroof" });
console.log(car);
//# sourceMappingURL=assignment.js.map