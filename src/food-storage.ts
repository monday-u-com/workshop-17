class FoodStorage {
    private storage = new Map<string, number>();

    public addPortions(food: string, portions: number): void {
        let portionsTotal = portions + (this.storage.has(food) ? this.storage.get(food) : 0);
        this.storage.set(food, portionsTotal);
    }


    public getPortion(food: string): boolean {
        if (this.storage.has(food)) {
            let newTotal = this.storage.get(food) - 1;
            this.storage.set(food, newTotal);
            if (!newTotal) {
                this.storage.delete(food);
            }
            return true;
        } else {
            return false;
        }
    }

    public isEmpty(): boolean {
        return this.storage.size === 0;
    }

}

export const foodStorage: FoodStorage = new FoodStorage();
