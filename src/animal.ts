export enum AnimalType {
    DOG, CAT, SHARK, TIGER
}

export class Animal {
    private readonly _animalType: AnimalType;
    private readonly _name: string;

    get animalType(): AnimalType {
        return this._animalType;
    }

    get name(): string {
        return this._name;
    }

    constructor(animalType: AnimalType, name: string) {
        this._animalType = animalType;
        this._name = name;
    }
}