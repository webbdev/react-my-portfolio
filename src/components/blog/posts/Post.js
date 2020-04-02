import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import _uniqueId from 'lodash/uniqueId';
import ListComments from '../comments/ListComments'
import AddComment from '../comments/AddComment'
import Spinner from './../../layout/Spinner'
import './../../Post.scss'

export default class Post extends Component {
    state = {
        post: {},
        comments: [
            {
                id: _uniqueId("prefix-"),
                userName: "John",
                userComment: "Thanks for sharing!"
            }
        ],
        loading: false,
        showComment: false
    }

    async componentDidMount() {
       this.setState({ loading: true }) 

       let postId = this.props.match.params.id;

       const res = axios.get(`https://raw.githubusercontent.com/webbdev/react-my-portfolio/master/src/utils/data-blog.json`)

       this.setState({ post: (await res).data.find(data => data.id === postId), loading: false })
    }

    // Toggle Comments 
    onToggleComments = () => {
        const showComment = this.state.showComment;
        this.setState({
            showComment: !showComment
        })
    }

    // Add Comment
    addComment = (userName, userComment) => {
        const newComment = {
            id: _uniqueId("prefix-"),
            userName: userName,
            userComment: userComment
        }
        this.setState({ comments: [...this.state.comments, newComment] })
    } 

    render() {
        const { 
            author, 
            title, 
            img1, 
            img1Alt, 
            img2, 
            img2Alt,
            img3, 
            img3Alt,
            img4, 
            img4Alt,
            img5, 
            img5Alt,
            description1, 
            description2, 
            description3, 
            description4, 
            description5, 
            description6,
            description7,
            subtitle4,
            subtitle6
        } = this.state.post;
        const { loading, comments, showComment } = this.state;

        if (loading) {
            return <Spinner />
        } else {

            return (
                <div className="post-container">
                    <div>
                        <Link to="/blog" className="back-link">Back</Link>
                    </div>
                    <div className="single-post-wrapper">
                        <article className="single-post">
                            <p className="post-author">Author: {author}</p>
                            <h3 className="post-title">{title}</h3>
                            <div className="img-box">
                                <img src={img1} alt={img1Alt} />
                            </div>
                            <div className="description">
                                <p className="post-description">{description1}</p>
                                <p className="post-description">{description2}</p>
                                <p className="post-description">{description3}</p>
                                <h5 className="post-subtitle">{subtitle4}</h5>
                                <p className="post-description">{description4}</p>
                                <img src={img2} alt={img2Alt} className="post-img" />
                                <p className="post-description">{description5}</p>
                                <img src={img3} alt={img3Alt} className="post-img" />
                                <h5 className="post-subtitle">{subtitle6}</h5>
                                <p className="post-description">{description6}</p>
                                <img src={img4} alt={img4Alt} className="post-img" />
                                <p className="post-description">{description7}</p>
                                <img src={img5} alt={img5Alt} className="post-img" />
                            </div>

                            <div className="post-footer">
                                <div>
                                    <span className="view">1 view</span>
                                </div>
                                <div>
                                    <span className="heart-icon"><i className="far fa-heart" /></span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="comment-container">
                        <div className="inside">
                            <p onClick={this.onToggleComments}><i className="far fa-comment"></i><span>Read and leave comments</span></p>

                            {showComment &&
                                <div className="comments-block">
                                    <ListComments comments={comments} />
                                    <AddComment addComment={this.addComment} />
                                </div>
                            }
                            
                        </div> 
                    </div>   
                </div>
            )
        }
        
    }
}
