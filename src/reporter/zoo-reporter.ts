import {Zoo} from "../zoo";

export class ZooReporter{
    private readonly zoo:Zoo;

    constructor(zoo: Zoo) {
        this.zoo = zoo;
    }

    generateSalaryReport(): void{
        console.log(`Name         | Salary`)
        console.log('------------------------')
        this.zoo.caretakers.forEach(c=> console.log(`${c.name.padEnd(12)} | ${c.salary}`))
    }

    generateFeedingReport(){
        console.log(`Name         | Feedings`)
        console.log('------------------------')
        this.zoo.animals.filter(a=>a.portionsRecieved > 0).forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.portionsRecieved}`))
    }

    generateHappinessReport(){
        console.log(`Name         | Happiness`)
        console.log('------------------------')
        this.zoo.animals.forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.isHappy()}`))
    }

    generateNotFedReport (){
        console.log(`Not Fed`)
        console.log('------------------------')
        this.zoo.animals.filter(a=>a.portionsRecieved === 0).forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.portionsRecieved}`))
    }
}