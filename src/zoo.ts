import {Animal} from "./animal";
import {Caretaker} from "./caretaker"

export class Zoo {
    private readonly _animals: Animal[];
    private readonly _caretakers: Caretaker[];

    constructor(animals: Animal[], careTakers: Caretaker[]) {
        this._animals = animals;
        this._caretakers = careTakers;
    }

    get animals(): Animal[] {
        return this._animals;
    }

    get caretakers(): Caretaker[] {
        return this._caretakers;
    }
}