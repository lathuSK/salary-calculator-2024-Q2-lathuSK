import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateBasicSalary } from '../store/actions/salaryActions';
import styled from 'styled-components';

const FormContainer = styled.div`
    padding: 1rem;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    margin: 1rem 0;
`;

const SalaryForm = () => {
    const [basicSalary, setBasicSalary] = useState(0);
    const dispatch = useDispatch();

    const handleBasicSalaryChange = (e) => {
        setBasicSalary(e.target.value);
        dispatch(updateBasicSalary(parseFloat(e.target.value)));
    };

    return (
        <FormContainer>
            <label>
                Basic Salary:
                <input
                    type="number"
                    value={basicSalary}
                    onChange={handleBasicSalaryChange}
                />
            </label>
        </FormContainer>
    );
};

export default SalaryForm;
