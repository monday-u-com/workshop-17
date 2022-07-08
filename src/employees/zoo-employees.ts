import { Animal} from "../animal-types/animal";
import {Employee} from "./employee";
import {Feeder, Petter} from "./caretaker-interface";
import {PettableAnimal} from "../animal-types/pettable-animal";



export class ZooEmployee extends Employee implements Feeder, Petter {
    private _feedingCount: number;
    private _pettingCount:number;
    constructor(name: string) {
        super(name);
        this._feedingCount = 0;
        this._pettingCount = 0;
    }

    pet(pettableAnimal:PettableAnimal) {
        pettableAnimal.pet();
        this._pettingCount++;
    }

    feed(animal: Animal): void {
        animal.feed();
        this._feedingCount++;
    }

    get feedingCount(): number {
        return this._feedingCount;
    }

    get pettingCount(): number {
        return this._pettingCount;
    }
}

export class ZooVolunteer extends Employee implements Petter {

    constructor(name: string) {
        super(name);
    }

    pet(pettableAnimal: PettableAnimal) {
        pettableAnimal.pet();
    }
}