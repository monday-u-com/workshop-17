import {PettableAnimal, Animal} from "../animal-types/animal";
import {Employee, PayedEmployee} from "./employee";
import {Feeder, Petter} from "./caretaker-interface";

const PAY_PER_FEED: number = 500;
const PAY_PER_PET: number = 100;

export class ZooCaretaker extends PayedEmployee implements Feeder, Petter {

    constructor(name: string) {
        super(name);
    }

    pet(pettableAnimal: PettableAnimal) {
        pettableAnimal.pet();
        this.addSalary(PAY_PER_PET);
    }

    feed(animal: Animal): void {
        animal.feed();
        this.addSalary(PAY_PER_FEED);
    }

}

export class Volunteer extends Employee implements Petter {

    constructor(name: string) {
        super(name);
    }

    pet(pettableAnimal: PettableAnimal) {
        pettableAnimal.pet();
    }
}