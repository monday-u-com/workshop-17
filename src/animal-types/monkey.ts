import {PettableAnimal} from "./animal"
import {FoodTypes} from "../food-types"

export class Monkey extends PettableAnimal {

    constructor(name: string) {
        super(name);
    }

    isHappy(): boolean {
        return this.portionsRecieved > 3;
    }

    favoriteFood(): string {
        return FoodTypes.BANANA;
    }

}
