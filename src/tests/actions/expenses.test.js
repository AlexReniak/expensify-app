import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup removeExpense action object', () => {
    const action = removeExpense({ id: '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should test editExpense action', () => {
    const updates = {
        description: 'hello world'
    }

    const action = editExpense( '123456', updates)
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: {
            description: 'hello world'
        }
    })
})

test('should test addExpense action provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 10500,
        createdAt: 1000,
        note: 'Last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should test addExpense action with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
})