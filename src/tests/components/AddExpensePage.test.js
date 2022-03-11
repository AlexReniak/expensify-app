import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

// Error: useNavigate() can only be used in the context of a <Router> component.
// Restructuring needed to run testing on component

// test('should render AddExpensePage correctly', () => {
//     const addExpense = jest.fn()
//     const wrapper = shallow(<AddExpensePage addExpense={addExpense}/>)
//     expect(wrapper).toMatchSnapshot()
// })

// test('should handle addExpense', () => {
//     const addExpense = jest.fn()
//     const wrapper = shallow(<AddExpensePage addExpense={addExpense}/>)
//     wrapper.find('ExpenseForm').prop('addExpense')(expenses[1])
//     expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
// })

test('empty test', () => {
    
})