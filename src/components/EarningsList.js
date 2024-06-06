import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEarning, updateEarning, deleteEarning } from '../store/actions/salaryActions';
import styled from 'styled-components';

const EarningsContainer = styled.div`
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin: 1rem 0;
`;

const EarningsList = () => {
    const [newEarning, setNewEarning] = useState({ name: '', amount: 0, epf: false });
    const earnings = useSelector(state => state.earnings);
    const dispatch = useDispatch();

    const handleAddEarning = () => {
        dispatch(addEarning(newEarning));
        setNewEarning({ name: '', amount: 0, epf: false });
    };

    const handleUpdateEarning = (index, field, value) => {
        dispatch(updateEarning(index, field, value));
    };

    const handleDeleteEarning = (index) => {
        dispatch(deleteEarning(index));
    };

    return (
        <EarningsContainer>
            <h2>Earnings</h2>
            <div>
                {earnings.map((earning, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={earning.name}
                            onChange={(e) => handleUpdateEarning(index, 'name', e.target.value)}
                        />
                        <input
                            type="number"
                            value={earning.amount}
                            onChange={(e) => handleUpdateEarning(index, 'amount', parseFloat(e.target.value))}
                        />
                        <label>
                            EPF/ETF:
                            <input
                                type="checkbox"
                                checked={earning.epf}
                                onChange={(e) => handleUpdateEarning(index, 'epf', e.target.checked)}
                            />
                        </label>
                        <button onClick={() => handleDeleteEarning(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Earning Name"
                    value={newEarning.name}
                    onChange={(e) => setNewEarning({ ...newEarning, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={newEarning.amount}
                    onChange={(e) => setNewEarning({ ...newEarning, amount: parseFloat(e.target.value) })}
                />
                <label>
                    EPF/ETF:
                    <input
                        type="checkbox"
                        checked={newEarning.epf}
                        onChange={(e) => setNewEarning({ ...newEarning, epf: e.target.checked })}
                    />
                </label>
                <button onClick={handleAddEarning}>Add Earning</button>
            </div>
        </EarningsContainer>
    );
};

export default EarningsList;
