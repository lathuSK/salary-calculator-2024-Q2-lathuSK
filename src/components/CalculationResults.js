import React from 'react';
import { useSelector } from 'react-redux';
import { calculateNetSalary } from '../utils/calculations';
import styled from 'styled-components';

const ResultsContainer = styled.div`
    padding: 1rem;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    margin: 1rem 0;
`;

const CalculationResults = () => {
    const salaryState = useSelector(state => state);
    const results = calculateNetSalary(salaryState);

    return (
        <ResultsContainer>
            <h2>Salary Calculation Results</h2>
            <p>Gross Earnings: {results.grossEarnings}</p>
            <p>Net Salary: {results.netSalary}</p>
            <p>Cost to Company: {results.costToCompany}</p>
        </ResultsContainer>
    );
};

export default CalculationResults;
