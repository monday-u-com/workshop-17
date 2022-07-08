import {Zoo} from "../zoo";
import {SalaryService} from "../employees/salary-service";

export class ZooReporter{
    private readonly zoo:Zoo;

    constructor(zoo: Zoo) {
        this.zoo = zoo;
    }

    generateSalaryReport(): void{
        this.headerPrinter(['Name', 'Salary'], 'Salary Report');
        this.zoo.caretakers.forEach(c=> console.log(`${c.name.padEnd(12)} | ${SalaryService.calcSalary(c)}`))
    }

    generateFeedingReport(){
        this.headerPrinter(['Name', 'Portions'], 'Feeding Report')
        this.zoo.animals.filter(a=>a.portionsRecieved > 0).forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.portionsRecieved}`))
    }

    generateHappinessReport(){
        this.headerPrinter(['Name', 'Happy'], 'Animal Happiness')
        this.zoo.animals.forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.isHappy()}`))
    }

    generateNotFedReport (){
       this.headerPrinter(['Name'], 'Animals Not Fed')
        this.zoo.animals.filter(a=>a.portionsRecieved === 0).forEach(a=> console.log(`${a.name.padEnd(12)} | ${a.portionsRecieved}`))
    }

    generateEmployeeActivityReport (){
        this.headerPrinter(['Name', 'Feedings', 'Pettings'], 'Employee Activity Report')
        this.zoo.caretakers.forEach(c=>console.log(`${c.name.padEnd(12)} | ${c.feedingCount.toString().padEnd(12)} | ${c.pettingCount.toString().padEnd(12)}`))
    }
    private headerPrinter(headers:string[] , reportName:string){
        const header = headers.map((s)=>s.padEnd(12)).reduce((prev, current)=>prev+' | ' + current);
        console.log(`\n\n${reportName}:\n\n`)
        console.log(header)
        console.log(''.padEnd(header.length,'-'));
    }
}