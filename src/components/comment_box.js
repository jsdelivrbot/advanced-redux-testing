import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
    constructor(props) {
        super(props)

        this.state = {comment: ""}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({comment: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.saveComment(this.state.comment)
        this.setState({comment: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comment-box">
                <h4>Add a comment</h4>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment}
                />
                <div>
                    <button type="submit">Submit Comment</button>
                </div>
            </form>
        )
    }
}


export default connect(null, actions)(CommentBox)
