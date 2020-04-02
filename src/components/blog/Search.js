import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        const { search, onChange } = this.props;

        return (
            <div className="blog-header">
                <div><span>All Posts</span></div>
                <div>
                    <div className="search-bar">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Search.." 
                            value={search}
                            onChange={onChange}
                        />
                        <span className="search-btn">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
