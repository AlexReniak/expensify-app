import React from "react";
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { useNavigate } from 'react-router-dom'


export const AddExpensePage = (props) =>  {
    const navigate = useNavigate()
    const onSubmit = (expense) => {
        props.addExpense(expense)
        navigate('/')
    } 
    return (
        <div>
            <h1>Add expense</h1>
            <ExpenseForm 
                onSubmit={onSubmit}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)