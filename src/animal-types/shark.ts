import {DangerousAnimal} from "./animal"
import {FoodTypes} from "../food-types"

export class Shark extends DangerousAnimal {

    constructor(name: string) {
        super(name);
    }

    isHappy(): boolean {
        return false;
    }

    favoriteFood(): string {
        return FoodTypes.FISH;
    }

}
