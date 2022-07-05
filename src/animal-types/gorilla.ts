import {DangerousAnimal} from "./dangerous-animal"
import {FoodTypes} from "../food-types"

export class Gorilla extends DangerousAnimal {

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
