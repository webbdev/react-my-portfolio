import React, { Component } from 'react'
//import Search from '../blog/Search'
import Blog from '../blog/posts/ListPosts' 
import './../Blog.scss'

export default class BlogPage extends Component {

    render() {
        return (
            <div className="blog-container">
                <h2>Welcome to my blog</h2>
                <Blog />
            </div>
        )
    }
}
