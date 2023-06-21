const users = require('./data');

const canDriveOnWater = (people) => {
    for (let i = 0; i < people.length; i += 1) {
        const person = people[i];
        for (let index = 0; index < person.canDrive.length; index++) {
            if (vehicle.location === 'water') {
                return person;
            }
        }
    }

    return undefined;
};

//const someBodyDrives = (people, vehicleName) => {
//for (let i = 0; i < people.length; i += 1) {
//const person = people[i];
//for (let index = 0; index < person.canDrive.length; index++) {
//const vehicle = person.canDrive[index];
//if (vehicle.name === vehiclenName) {
//return true;
//}

//}
//}
//return false;
//};

const someBodyDrives = (people, vehicleName) => people
    .some((person) => person
        .canDrive.some(
            (vehicle) => vehicle.name === vehicleName
        )
    );

console.log(someBodyDrives(users, 'motorcycle'));
console.log(canDriveOnWater(users, 'motorcycle'));