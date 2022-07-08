import {Zoo} from "./zoo";
import {Tiger} from "./animal-types/tiger";
import {Shark} from "./animal-types/shark";
import {Dog} from "./animal-types/dog";
import {Cat} from "./animal-types/cat";
import {ZooVolunteer, ZooEmployee} from "./employees/zoo-employees";
import {FoodStorage} from "./food-storage";
import {ZooReporter} from "./reporter/zoo-reporter";

let zoo: Zoo;
let foodStorage = new FoodStorage();

async function main() {
    init()
    await simulate();
    report()
}

function init() {

    foodStorage.addPortions('milk', 2);
    foodStorage.addPortions('fish', 3);
    foodStorage.addPortions('bonzo', 1);
    foodStorage.addPortions('meat', 5);

    zoo = new Zoo(foodStorage);
    zoo.registerCaretaker(new ZooEmployee('John'));
    zoo.registerCaretaker(new ZooEmployee('Tarzan'));
    zoo.registerVolunteer(new ZooVolunteer('Ezekiel'));


    zoo.addAnimal(new Tiger('Tigger'));
    zoo.addAnimal(new Shark('Jaws'));
    zoo.addAnimal(new Dog('Snoopy'));
    zoo.addAnimal(new Cat('Garfield'));
    zoo.addAnimal(new Dog('Toto'));
}

async function simulate (){
    while (!foodStorage.isEmpty()) {
        zoo.randomFeeding();
        zoo.randomPetting();
        await delay(100)
    }
}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));

function report (){
    console.log('-----------------------------------------------------------------')
    console.log('-----------------------Summary-----------------------------------')
    console.log('-----------------------------------------------------------------')

    let reporter:ZooReporter = new ZooReporter(zoo);
    reporter.generateSalaryReport();
    reporter.generateFeedingReport();
    reporter.generateNotFedReport();
    reporter.generateHappinessReport();
    reporter.generateEmployeeActivityReport();
}




main();