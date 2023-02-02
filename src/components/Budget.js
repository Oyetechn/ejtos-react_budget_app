
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);

    const { expenses, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleSetBudget = (newBudget) => {
        if (newBudget > 20000) {
            alert("Maximum budget is 20,000.")
            return;
        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    type='number'
                    id='budget'
                    value={budget}
                    // Increment/Decrement by 10 in each step
                    step='10'
                    max={20000}
                    style={{width: '60%'}}
                    onChange={(event) => handleSetBudget(event.target.value)}/>
            </span>
        </div>
    );
};

export default Budget;
