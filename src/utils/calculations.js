export const calculateNetSalary = ({ basicSalary, earnings, deductions }) => {
    const totalEarnings = earnings.reduce((acc, earning) => acc + earning.amount, basicSalary);
    const totalDeductions = deductions.reduce((acc, deduction) => acc + deduction.amount, 0);
    const grossEarnings = totalEarnings - totalDeductions;
    const totalEarningsForEPF = earnings.reduce((acc, earning) => acc + (earning.epf ? earning.amount : 0), basicSalary);
    const grossSalaryForEPF = totalEarningsForEPF - totalDeductions;
    const employeeEPF = grossSalaryForEPF * 0.08;
    const employerEPF = grossSalaryForEPF * 0.12;
    const employerETF = grossSalaryForEPF * 0.03;
    const apit = (grossEarnings * 0.18) - 25500;
    const netSalary = grossEarnings - employeeEPF - apit;
    const costToCompany = grossEarnings + employerEPF + employerETF;

    return {
        grossEarnings,
        netSalary,
        costToCompany,
        employeeEPF,
        employerEPF,
        employerETF,
        apit
    };
};
