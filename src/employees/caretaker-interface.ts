import {PettableAnimal, Animal} from "../animal-types/animal";

export interface Feeder {
    feed(animal: Animal): void;
}

export interface Petter {
    pet(pettableAnimal: PettableAnimal): void;
}