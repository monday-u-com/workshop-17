export abstract class Employee {
    readonly name: string;
    protected constructor(name: string) {
        this.name = name;
    }
}
