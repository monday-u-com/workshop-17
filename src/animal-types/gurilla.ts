import {DangerousAnimal} from "./animal"
import {FoodTypes} from "../food-types"

export class Gurilla extends DangerousAnimal {

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
