import {PettableAnimal} from "./animal"
import {FoodTypes} from "../food-types"

export class Cat extends PettableAnimal {

    constructor(name: string) {
        super(name);
    }

    isHappy(): boolean {
        return this.portionsRecieved > 0 &&
            Date.now() - this.lastPettingTime > 60 * 60 * 1000;
    }

    favoriteFood(): string {
        return FoodTypes.MILK;
    }

}
