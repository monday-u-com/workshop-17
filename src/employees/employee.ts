export abstract class Employee {
    readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}

export abstract class PayedEmployee extends Employee {
    private _salary: number;

    constructor(name: string) {
        super(name);
        this._salary = 0;
    }

    get salary(): number {
        return this._salary;
    }

    public addSalary(payment: number) {
        this._salary += payment;
    }
}