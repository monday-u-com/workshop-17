import {PettableAnimal} from "./pettable-animal"
import {FoodTypes} from "../food-types"

export class Dog extends PettableAnimal {

    constructor(name: string) {
        super(name);
    }

    isHappy(): boolean {
        return true;
    }

    favoriteFood(): string {
        return FoodTypes.BONZO;
    }

}
