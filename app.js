//alert("Hello from the app.js!");

const name = "John";
const age = 25;
const job = "Software Developer";
const city = "Tallinn";

function hello(){
    return "Hello!"
}

/*let html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li>'
+'<li>Job: '+job+'</li>'+
'<li>City: '+city+'</li></ul>';*/

let html = `
    <ul>
        <li>Name: ${name}</li>  
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Says: ${hello()}</li>
    </ul>  
`;

document.body.innerHTML = html;

console.log(typeof(job));

console.log(typeof(age));


const numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof(numbers));

numbers.forEach(number => {
    console.log("Lets count: ", number);
});

const mixedArray = [22, "banana", true];

mixedArray.forEach(element => {
    console.log("Väärtus: ", element);
    console.log("Datatype: ", typeof(element));
});

console.log("Banana is a ",mixedArray[1].length,"chars long");

mixedArray.push("apple");

mixedArray.unshift(1000);

mixedArray.pop();

mixedArray.shift();

mixedArray.splice(1,1);

mixedArray.forEach(element=>{
    console.log("Updated array: ",element);
});

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    email: "john.doe@gmail.com",
    hobbies: ["music","sports"],

    getYearOfBirth: function() {
        return 2019- this.age;
    }
}

let val;
val = person;
val = person.firstName;
val = person.lastName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.getYearOfBirth();
console.log(val);

const people = [
    {name: "John", age: 25},
    {name: "Sarah", age: 28},
    {name: "Tom", age: 18},
]

people.forEach(person=>{
    console.log(person.name, "is", person.age, " years old");
});