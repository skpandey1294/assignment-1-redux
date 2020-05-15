import React, { Component } from 'react'

import '../../assets/styles/Posts.css'

import { Link } from 'react-router-dom'
import { fetchPosts } from '../../redux/async-api/posts.js'
import { connect } from 'react-redux'


class Posts extends Component {

    componentDidMount() {
        this.props.postsList()
    }

    render() {
        const { loading, posts, error } = this.props

        console.log(posts)

        // const postsCard = posts.map(post => (
        //     <Link to={`/${post.id}`} >
        //     <div key={post.id} id={`post-${post.id}`} className="card">
        //         <span> <b>UserId</b>: {post.userId} </span>
        //         <span> <b>PostId</b>: {post.id} </span>
        //         <span><b>Title</b>: {post.title} </span>
        //     </div>
        //     </Link>
        // )) 
        return (

            loading === true ? <div>Loading...</div> :
            <div className="container1">
                 {/* {postsCard} */}
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        posts: state.posts,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postsList: () => dispatch(fetchPosts())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)