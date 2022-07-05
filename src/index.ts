import {Caretaker} from "./caretaker";
import {Animal, AnimalType} from "./animal";
import {foodStorage} from "./food-storage";
import {Zoo} from "./zoo";

let zoo: Zoo;

function init() {
    const caretakers: Caretaker[] = [
        new Caretaker('John'),
        new Caretaker('Tarzan'),
        new Caretaker('Ezekiel')
    ];

    const animals: Animal[] = [
        new Animal(AnimalType.TIGER, 'Tigger'),
        new Animal(AnimalType.SHARK, 'Jaws'),
        new Animal(AnimalType.DOG, 'Snoopy'),
        new Animal(AnimalType.CAT, 'Garfield'),
        new Animal(AnimalType.DOG, 'Toto')
    ]


    foodStorage.addPortions('milk', 2);
    foodStorage.addPortions('fish', 3);
    foodStorage.addPortions('bonzo', 1);
    foodStorage.addPortions('meat', 5);

    zoo = new Zoo(animals, caretakers);
}


function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

async function main() {
    while (!foodStorage.isEmpty()) {
        await zoo.caretakers[getRandomInt(zoo.caretakers.length)].feed(
            zoo.animals[getRandomInt(zoo.animals.length)]
        );
        await delay(200)
    }
    console.log('-----------------------------------------------------------------')
    console.log('-----------------------Summary-----------------------------------')
    console.log('-----------------------------------------------------------------')
    zoo.caretakers.forEach(c => {
        console.log(`${c.name} was paid a total of ${c.salary}`)
    })
}

init();
main();