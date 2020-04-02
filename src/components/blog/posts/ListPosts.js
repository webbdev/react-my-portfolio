import React, { Component, Fragment } from 'react'
import axios from 'axios'
import PostItem from './PostItem';
import Spinner from '../../layout/Spinner'
import Search from '../Search'

export default class ListPosts extends Component {
    state = {
        posts: [],
        loading: false,
        search: ''
    }

    async componentDidMount() {
        this.setState({ loading: true }) 
        const res = axios
        .get(`https://raw.githubusercontent.com/webbdev/react-my-portfolio/master/src/utils/data-blog.json`)

        this.setState({ posts: (await res).data, loading: false })
    }

    onChange = e => {
        this.setState({
            search: e.target.value,
        })
    }

    render() {
        const { posts, loading, search } = this.state;

        const searchBarText = search.toLowerCase();

        const searchResult = posts.filter(post => {
            return Object.keys(post).some(key =>
                post[key].toLowerCase().includes(searchBarText)
            )
        })

        if (loading) {
            return <Spinner />
        } else {
            return (
                <Fragment>
                    <Search search={search} onChange={this.onChange} />

                    {searchResult.map((post, index) =>
                        <PostItem post={post} key={index} />
                    )}
                </Fragment>
            )
        }
    }
}
