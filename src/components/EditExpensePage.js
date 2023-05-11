import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    const id = useParams().id
    const navigate = useNavigate()
    const selectedExpense = props.expenses.find((expense) => expense.id === id)
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header-title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={selectedExpense}
                    onSubmit={(expense) => {
                        props.dispatch(editExpense(id, expense))
                        navigate('/')
                    }}
                />
                <button
                    className='button button-secondary' 
                    onClick={() => {
                        props.dispatch(removeExpense({ id }))
                        navigate('/')
                    }}
                >
                    Remove Expense
                </button>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses 
    }
}

export default connect(mapStateToProps)(EditExpensePage)