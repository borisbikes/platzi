var person = prompt('Please enter your name', 'Harry Potter');

if(person != null){
    console.log(`The last letter of your name is:  ${person.charAt(person.length-1)}`);
}