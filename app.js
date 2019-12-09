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