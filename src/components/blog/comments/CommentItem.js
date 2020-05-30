import React, { Component } from 'react'

export default class CommentItem extends Component {
    render() {
        const { comment } = this.props;
        let firstLetterOfName = this.props.comment.userName.charAt(0);

        return (
            <div className="comment-box">
                <div className="comment-col">
                    <div className="author-thumb">
                        <div>
                            <div>{firstLetterOfName}</div>
                        </div>
                    </div>
                </div>
                <div className="comment-col">
                <div className="author-name">{comment.userName}</div>
                    <div className="comment">{comment.userComment}</div>
                </div>
            </div>
        )
    }
}
