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
            <div className="page-header">
                <div className="content-container">
                    <h1 className='page-header-title'>Add expense</h1>
                </div>
            </div>
            
            <div className="content-container">
                <ExpenseForm 
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)