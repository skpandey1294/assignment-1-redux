import React, { Component } from 'react'

import '../../assets/styles/userPost.css'
import { connect } from 'react-redux'

import { fetchUserPost, fetchUserComment } from '../../redux/async-api/usersPost.js'
import { fetchUserInfo } from '../../redux/async-api/userInfo.js'

class UserPost extends Component {

    componentDidMount() {
        const { fetchUserPost, fetchUserInfo, fetchUserComment } = this.props
        const { postId } = this.props.match.params

        fetchUserPost(postId)

        fetchUserComment(postId)

    }


    render() {

        const { loading, userPost, error, state } = this.props

        console.log(userPost)

            
        console.log(state)

        // const comments = comment.map(comment => {
        // return(
        //     <div key={`comment${comment.id}`}>
        //     <hr></hr>
        //     <Typography id={`comment${comment.id}`} gutterBottom component="p">
        //     <span id={`comment${comment.id}`}><b>comment by user</b>: {comment.name}</span>
        //     </Typography><br></br>
        //     <Typography id={`comment${comment.id}`} gutterBottom component="p">
        //     <span id={`comment${comment.id}`}><b>comment</b>: {comment.body}</span>
        //     </Typography>
        //     </div>
        //     )


        // const userPost = (
        //     <Fragment>
        //         <div>
        //             <h3>UserPost</h3>
        //         </div>
    
        //         <div key={`post${post.id}`} className="card-container">
    
        //             <Card id={`post${post.id}`} className="card">
    
        //                 <CardActionArea id={`post${post.id}`}>
    
        //                     <CardContent id={`post${post.id}`}>
                                
        //                         <Typography id={`post${post.id}`} gutterBottom component="p">
        //                             <span id={`post${post.id}`}><b>UserName</b>: {username} </span>
        //                         </Typography>
        
        //                         <Typography id={`post${post.id}`} gutterBottom component="p">
        //                         <span id={`post${post.id}`}><b>Title</b>: {post.title} </span>
        //                         </Typography>
    
        //                         <Typography id={`post${post.id}`} gutterBottom component="p">
        //                         <span id={`post${post.id}`}><b>Body</b>: {post.body} </span>
        //                         </Typography>
    
        //                         <React.Fragment>{comments}</React.Fragment>
        
        //                     </CardContent>
    
        //                 </CardActionArea>
    
        //             </Card>
    
        //         </div>
    
            // </Fragment>
            // )


        return (
            ( loading === true ? <div>Loading...</div> : 
            <div className="container1">
                Hiii!!
            </div> )
        )
    }
}

const matchStateToProps = (state) => {

    return {
        loading: state.loading,
        userPost: state.userPost,
        error: state.error,
        stateValue: state
    }

}

const matchDispatchToProps = (dispatch) => {

    return {
        fetchUserPost: (postId) => dispatch(fetchUserPost(postId)),
        fetchUserInfo: (userId) => dispatch(fetchUserInfo(userId)),
        fetchUserComment: (postId) => dispatch(fetchUserComment(postId))
    }
}

export default connect( matchStateToProps, matchDispatchToProps )( UserPost )