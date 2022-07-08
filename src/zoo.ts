import {Animal} from "./animal-types/animal";
import {ZooVolunteer, ZooEmployee} from "./employees/zoo-employees";
import {Feeder, Petter} from "./employees/caretaker-interfaces";
import {FoodStorage} from "./food-storage";
import {PettableAnimal} from "./animal-types/pettable-animal";

export class Zoo {
    private readonly _animals: Animal[];
    private readonly _caretakers: ZooEmployee[];
    private readonly _volunteers: ZooVolunteer[];
    private foodStorage: FoodStorage

    constructor(foodStorage:FoodStorage) {
        this._animals =[];
        this._caretakers = [];
        this._volunteers = [];
        this.foodStorage = foodStorage;
    }

    public randomFeeding (){
        let animal:Animal = this.randomAnimal();
        let feeder:Feeder = this.randomFeeder();
        let portion:boolean = this.foodStorage.getPortion(animal.favoriteFood());
        if (portion){
            feeder.feed(animal);
        }
    }

    public randomPetting(){
        this.randomPetter().pet(this.randomPettable());
    }

    public registerVolunteer(v: ZooVolunteer): void{
        this._volunteers.push(v);
    }
    public registerCaretaker (c: ZooEmployee): void{
        this._caretakers.push(c);
    }
    public addAnimal (a: Animal): void{
        this._animals.push(a);
    }

    get animals(): Animal[] {
        return this._animals;
    }

    get caretakers(): ZooEmployee[] {
        return this._caretakers;
    }

    get volunteers(): ZooVolunteer[] {
        return this._volunteers;
    }

    private randomFeeder (): Feeder{
        const index = Math.floor(Math.random() * (this._caretakers.length))
        return this._caretakers[index];
    }

    private randomPetter (): Petter{
        const allPetters: Petter[] = [...this._caretakers, ...this._volunteers];
        const index = Math.floor(Math.random() * (allPetters.length))
        return allPetters[index];
    }

    private randomAnimal(): Animal{
        const index = Math.floor(Math.random() * (this.animals.length))
        return this._animals[index];
    }

    private randomPettable(): PettableAnimal{
        const pettable:any[] = this.animals.filter((a:Animal ): boolean => a.isPettable());
        const index = Math.floor(Math.random() * (pettable.length));
        return pettable[index];
    }

}