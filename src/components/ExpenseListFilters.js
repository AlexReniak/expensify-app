import React from "react";
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
    }

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group-item">
                        <input 
                            type="text" 
                            className="text-input"
                            placeholder="Search expenses" 
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group-item">
                        <select 
                        className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group-item">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId={'startDateId'}
                            endDate={this.props.filters.endDate}
                            endDateId={'endDateId'}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>
                </div>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)