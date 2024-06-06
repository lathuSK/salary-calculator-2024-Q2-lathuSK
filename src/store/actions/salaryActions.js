export const updateBasicSalary = (amount) => ({
    type: 'UPDATE_BASIC_SALARY',
    payload: amount,
});

export const addEarning = (earning) => ({
    type: 'ADD_EARNING',
    payload: earning,
});

export const updateEarning = (index, field, value) => ({
    type: 'UPDATE_EARNING',
    payload: { index, field, value },
});

export const deleteEarning = (index) => ({
    type: 'DELETE_EARNING',
    payload: index,
});

export const addDeduction = (deduction) => ({
    type: 'ADD_DEDUCTION',
    payload: deduction,
});

export const updateDeduction = (index, field, value) => ({
    type: 'UPDATE_DEDUCTION',
    payload: { index, field, value },
});

export const deleteDeduction = (index) => ({
    type: 'DELETE_DEDUCTION',
    payload: index,
});
