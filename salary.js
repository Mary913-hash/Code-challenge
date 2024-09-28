function netsalary(basisalary, benefits) { 
    let PAYE = {
       limit1: 24000,
       limit2: 32333,
       limit3: 500000,
       limit4: 800000,
       rate1: 0.10,
       rate2: 0.25,
       rate3: 0.30,
       rate4: 0.325,
       rate5: 0.35,

    };//we are defining the PAYE and its rate
    
    let NHIF = [ 
         {upTo: 5999, deduction: 150 },
         {upTo: 7999, deduction: 300 },
         {upTo: 11999, deduction: 400 },
         {upTo: 14999, deduction: 500 },
         {upTo: 19999, deduction: 600 },
         {upTo: 24999, deduction: 750 },
         {upTo: 29999, deduction: 850 },
         {upTo: 34999, deduction: 900 },
         {upTo: 39999, deduction: 950 },
         {upTo: 44999, deduction: 1000 },
         {upTo: 49999, deduction: 1100 },
         {upTo: 59999, deduction: 1200 },
         {upTo: 69999, deduction: 1300 },
         {upTo: 79999, deduction: 1400 },
         {upTo: 89999, deduction: 1500 },
         {upTo: 99999, deduction: 1600 },
         {above: 100000, deducction: 1700 }, 
    ];//defines the nhif deductions based on the gross salary

    //constants
    const NSSF_LIMIT = 7000;// monthely limit for NSSF contribution
    const NSSF_RATE = 0.06;// contribution rate
    const housingLevyRate = 0.015;// housing rate
    let grossSalary = basicSalary + benefits;// calaculate gross salary
    let tax = 0; //initializing tax variable

    // calculate PAYE
    if (grossSalary <=PAYE.limit1) {
        tax = 0;
    } else if (grossSalary <=PAYE.limit2) {
        tax = (grossSalary - PAYE.limit1) * PAYE.rate1;//tax for the second bracket
    }  else if (grossSalary <=PAYE.limit3) { 
        tax = (PAYE.limit2 - PAYE.limit1) * PAYE.rate1 + (grossSalary - PAYE.limit2) * PAYE.rate2 // tax for the third bracket
    } else if (grossSalary <=PAYE.limit4) {
         tax = (PAYE.limit2 - PAYE,limit1) * PAYE.rate1 + (PAYE.limit3 - PAYE.limit2) * PAYE.rate2 + (grossSalary - PAYE.limit3) * PAYE.rate3//tax for the forth bracket
    } else {
        tax = (PAYE.limit2 - PAYE.limit1) * PAYE.rate1 + (PAYE.limit3 - PAYE.limit2) * PAYE.rate2 + (PAYE.limit4 - PAYE.limit3) * PAYE.rate3 + (grossSalary - PAYE.limit4)
    }

    tax = PAYE.personalRelief;//substract personal relief from total tax
    tax = Math.max(tax,0);//make sure tax is nit negative

    let nhifDeduction = 0;// initializing MNHIF deduction variable
    // calcullate NHIF deduction based on gross salary
    for (let i = 0; i < NHIF.length; i++) {
         if (grossSalary <= NHIF[i]. || (NHIF[i].above && grossSalary > NHIF[i].above)) {
            nhifDeductin - NHIF[i].deduction;//assighs the corresponding deduction
            break;//exist the loop once the deduction is found

         }
    }

     const nssfContribution = Math.min(basicSalary * NSSF_RATE, NSSF_LIMIT);
     const housingLevy = grossSalary * housingLevyRate;

     const totalDeductions = tax + nhifDeduction +  nssfContribution + housingLevy;
     const netsalary = grossSalary - totalDeductions;

     return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfContribution: nssfContribution,
        housingLevy: housingLevy,
        totalDeductions: totalDeductions,
        netsalary: netsalary,
     };//to call them

}


const basicSalary = parseFloat(prompt("Enter your basic salary (ksh):"));//prompts the user for basic salary
const benefits = parseFloat(prompt("Enter your benefits (ksh):"));//propts the user for benefits
const salaryDetails = netsalary(basicSalary, benefits);//calculate the salary details

console.log(salaryDetails);//log the salary details to the cosole