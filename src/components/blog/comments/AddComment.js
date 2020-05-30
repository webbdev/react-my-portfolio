import React, { Component } from 'react'

export default class AddComment extends Component {
    state = {
        userName: '',
        userComment: '',
    }

    onChange = (e) => {
        this.setState({
			[e.target.name]: e.target.value
        })
    }

    addComment = (e) => {
        e.preventDefault();

        this.props.addComment(this.state.userName, this.state.userComment);

        this.setState({
            userName: '',
            userComment: ''
        })
    }
    
    render() {
        const { userName, userComment } = this.state;
        const isEnabled = userName.length > 0 && userComment.length > 0;

        return (
            <div className="comment-form-wrapper">
                <form className="comment-form" onSubmit={this.addComment}>
                    <input 
                        type="text" 
                        name="userName" 
                        ref="userName"
                        className="form-control input-style" 
                        placeholder="Name *"
                        value={userName}
                        onChange={this.onChange}
                    />
                    <textarea 
                        rows="3" 
                        type="text" 
                        name="userComment" 
                        ref="userComment"
                        className="form-control input-style" 
                        placeholder="Comment *"
                        value={userComment}
                        onChange={this.onChange}
                    />
                    <input 
                        type="submit" 
                        className="add-comment-btn" 
                        value="Add Comment" 
                        disabled={!isEnabled}
                        style={{ cursor: !isEnabled ? 'not-allowed' : 'pointer' }}
                    />
                </form>
            </div>
        )
    }
}
