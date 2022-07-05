import {DangerousAnimal} from "./animal"
import {FoodTypes} from "../food-types"

export class Tiger extends DangerousAnimal {

    constructor(name: string) {
        super(name);
    }

    isHappy(): boolean {
        return this.portionsRecieved > 1;
    }

    favoriteFood(): string {
        return FoodTypes.MEAT;
    }

}
