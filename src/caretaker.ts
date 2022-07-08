import {Animal, AnimalType} from "./animal";
import {foodStorage} from "./food-storage";

export class Caretaker {
    private readonly _name: string;
    private _salary: number;

    get salary(): number {
        return this._salary;
    }

    constructor(name: string) {
        this._name = name;
        this._salary = 0;
    }

    public feed(animal: Animal): void {
        let hasFood = foodStorage.getPortion(this.getFavoriteFood(animal));
        if (hasFood) {
            console.log(`${animal.name} was given food`);
            this._salary += 500;
            console.log(`${this._name} was paid $500`);
        } else {
            console.log(`${this._name} couldn't feed ${animal.name}`)
        }
    }

    get name(): string {
        return this._name;
    }

    private getFavoriteFood(animal: Animal): string {
        switch (animal.animalType) {
            case AnimalType.CAT:
                return 'milk';
            case AnimalType.DOG:
                return 'bonzo';
            case AnimalType.SHARK:
                return 'fish';
            case AnimalType.TIGER:
                return 'meat';
        }
    }
}