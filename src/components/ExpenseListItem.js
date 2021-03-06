import React from "react";
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h4>{description}</h4>
        </Link>
        <p>amount: {amount} - createdAt: {createdAt}</p>

    </div>
)

export default ExpenseListItem