import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses'

test('should set default state',() => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2] ])
})

test('should not remove expense if no id is found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add a new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        id: '4',
        description: 'water bill',
        amount: 1000,
        date: 0, 
        note: ''
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2], expenses[3] ])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates: {
            note: 'rent is going up'
        }    
    }

    const state = expensesReducer(expenses, action)
    expect(state[2].note).toBe('rent is going up')
})

test('should not edit expense if it does not exist', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5'
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})