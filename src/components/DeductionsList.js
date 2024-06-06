import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDeduction, updateDeduction, deleteDeduction } from '../store/actions/salaryActions';
import styled from 'styled-components';

const DeductionsContainer = styled.div`
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin: 1rem 0;
`;

const DeductionsList = () => {
    const [newDeduction, setNewDeduction] = useState({ name: '', amount: 0 });
    const deductions = useSelector(state => state.deductions);
    const dispatch = useDispatch();

    const handleAddDeduction = () => {
        dispatch(addDeduction(newDeduction));
        setNewDeduction({ name: '', amount: 0 });
    };

    const handleUpdateDeduction = (index, field, value) => {
        dispatch(updateDeduction(index, field, value));
    };

    const handleDeleteDeduction = (index) => {
        dispatch(deleteDeduction(index));
    };

    return (
        <DeductionsContainer>
            <h2>Deductions</h2>
            <div>
                {deductions.map((deduction, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={deduction.name}
                            onChange={(e) => handleUpdateDeduction(index, 'name', e.target.value)}
                        />
                        <input
                            type="number"
                            value={deduction.amount}
                            onChange={(e) => handleUpdateDeduction(index, 'amount', parseFloat(e.target.value))}
                        />
                        <button onClick={() => handleDeleteDeduction(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Deduction Name"
                    value={newDeduction.name}
                    onChange={(e) => setNewDeduction({ ...newDeduction, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={newDeduction.amount}
                    onChange={(e) => setNewDeduction({ ...newDeduction, amount: parseFloat(e.target.value) })}
                />
                <button onClick={handleAddDeduction}>Add Deduction</button>
            </div>
        </DeductionsContainer>
    );
};

export default DeductionsList;
