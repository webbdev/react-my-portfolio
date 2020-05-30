import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostItem extends Component {
    render() {
        const { post } = this.props;
        return (
            <article className="blog-box">
                <div className="blog-col">
                    <img src={post.img1} alt={post.img1Alt} />
                </div>
                <div className="blog-col">
                    <div className="blog-info-box">
                        <div>
                            <p className="post-author">Author: {post.author}</p>

                            <Link to={{ pathname: `/blog/${post.id}`, state: { post } }}>
                                <div>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-short-description">{post.shortDescription}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="comment-box">
                            <div>
                                <span className="view">1 view</span>
                                <Link to={{ pathname: `/blog/${post.id}`, state: { post } }} className="write-comment-link">Write a comment</Link>
                            </div>
                            <div>
                                <span className="heart-icon"><i className="far fa-heart" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
