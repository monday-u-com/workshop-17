import {Animal} from "../animal-types/animal";
import {PettableAnimal} from "../animal-types/pettable-animal";

export interface Feeder {
    feed(animal: Animal): void;
}

export interface Petter {
    pet(pettableAnimal: PettableAnimal): void;
}
