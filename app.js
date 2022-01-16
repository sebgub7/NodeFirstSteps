const fs = require('fs');

const genders = ["male", "female"];
const maleNames = ["Adam", "Adrian", "Albert", "Aleksander", "Alex"];
const femaleNames = ["Beata", "Bernadeta", "Bianka", "Bożena", "Brygida"];
const lastNames = ["Kowalski", "Nowak", "Kowal", "Nowy", "Stary"];

const randChoice = (arr) => {
  const randomArray = Math.floor(Math.random() * arr.length);
  return arr[randomArray];
};

const people = [];

for (i=0; i<20; i++) {
  const gender = randChoice(genders);
  const firstName = (gender == "male") ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = randChoice(lastNames);
  const age = Math.floor(Math.random() * 60) + 18;

  const randomPerson = {
    gender,
    firstName,
    lastName,
    age,
  }

  people.push(randomPerson);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});