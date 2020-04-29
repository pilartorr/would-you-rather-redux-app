import React, { Component, Fragment } from 'react'
import LogOut from './LogOut'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

    state = {
        firstOption:'',
        secondOption: '',
        toHome: false
    }

    handleOptionOne = (e) => {
        this.setState({
            firstOption: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            secondOption: e.target.value
        })
    }

    submitOptions = (e) => {
        e.preventDefault()

        const { firstOption, secondOption } = this.state

        this.props.addQuestion(firstOption, secondOption)

        this.setState(() => ({
            toHome: true
        }))
    }

    render() {
        const { firstOption, secondOption, toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/' />
        }
        console.log(this.submitOptions)
        return (
            <Fragment>
                <LogOut />
                <form onSubmit={this.submitOptions} id="new-question-form" className="w-50 border rounded p-4 m-auto">
                    <h3 className="my-4 text-center">Would you rather...</h3>
                    <div className="form-group">
                        <label className="lead" htmlFor="firstOption">Option One</label>
                        <input 
                            onChange={this.handleOptionOne} 
                            value={firstOption}
                            type="text" className="form-control" 
                            id="firstOption" 
                            placeholder="Please, type here your option one..." />
                    </div>
                    <div className="form-group">
                        <label className="lead" htmlFor="secondOption">Option Two</label>
                        <input 
                            onChange={this.handleOptionTwo} 
                            value={secondOption}
                            type="text" className="form-control" 
                            id="secondOption" 
                            placeholder="Please, type here your option two..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Fragment>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addQuestion: (firstOption, secondOption) => {
            dispatch(handleAddQuestion(firstOption, secondOption))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewQuestion)