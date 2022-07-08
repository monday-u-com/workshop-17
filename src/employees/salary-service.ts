import {ZooEmployee} from "./zoo-employees";

const PAY_PER_FEED: number = 500;
const PAY_PER_PET: number = 100;
export class SalaryService{
    static calcSalary (zooCaretaker: ZooEmployee){
        return PAY_PER_FEED *zooCaretaker.feedingCount + PAY_PER_PET * zooCaretaker.pettingCount;
    }
}