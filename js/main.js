import { account } from "./data";

import { allMonths } from "./data";


function allIncome {

    let sumOfIncomes = 0;
    for (let income in account ) {
        if(income !== NaN) {
            sumOfIncomes += account[income];

        }
        return sumOfIncomes;
    }
}



export {allIncome};


const month1 = document.getElementById('minIncome');
const month2 = document.getElementById('maxIncome');
const month3 = document.getElementById('minExpence');
const month4 = document.getElementById('maxExpence');


function summaryOfMonths {
    
}