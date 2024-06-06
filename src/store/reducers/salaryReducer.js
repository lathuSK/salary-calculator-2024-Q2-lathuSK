const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
};

const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BASIC_SALARY':
            return {
                ...state,
                basicSalary: action.payload,
            };
        case 'ADD_EARNING':
            return {
                ...state,
                earnings: [...state.earnings, action.payload],
            };
        case 'UPDATE_EARNING':
            return {
                ...state,
                earnings: state.earnings.map((earning, index) =>
                    index === action.payload.index
                        ? { ...earning, [action.payload.field]: action.payload.value }
                        : earning
                ),
            };
        case 'DELETE_EARNING':
            return {
                ...state,
                earnings: state.earnings.filter((_, index) => index !== action.payload),
            };
        case 'ADD_DEDUCTION':
            return {
                ...state,
                deductions: [...state.deductions, action.payload],
            };
        case 'UPDATE_DEDUCTION':
            return {
                ...state,
                deductions: state.deductions.map((deduction, index) =>
                    index === action.payload.index
                        ? { ...deduction, [action.payload.field]: action.payload.value }
                        : deduction
                ),
            };
        case 'DELETE_DEDUCTION':
            return {
                ...state,
                deductions: state.deductions.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default salaryReducer;
