import React, { Component } from 'react'
import CommentItem from './CommentItem'

export default class ListComments extends Component {
    render() {
        const { comments } = this.props;
        return (
            <div className="comment-box-wrapper">
                {comments.map(comment => (
                    <CommentItem key={comment.id} comment={comment} />
                ))}
            </div>
        )
    }
}
