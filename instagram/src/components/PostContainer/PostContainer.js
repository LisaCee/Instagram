import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            likes: this.props.post.likes 
        }
    }

    incrementLike = () => {
        let likes = this.state.likes;
        (this.state.liked ? likes-- : likes++);
        this.setState({likes});
    }
    clickLike = (e) => {
        this.setState({liked: !this.state.liked});
        this.incrementLike()
    }

    render() {
    return (
        <div className='postContainer'>
            <div className='thumbnail'>
                <img src={this.props.post.thumbnailUrl}/>
                <span>{this.props.post.username}</span>
            </div>
            <div className='postImage'>
                <img src={this.props.post.imageUrl} />
            </div>
            <div className='likes' onClick={this.clickLike}><i class="far fa-heart"></i>{this.state.likes}</div> 
            <CommentSection comments={this.props.post.comments}/>
        </div>
    ) 
 }   
 }
export default PostContainer;


// Each PostContainer component will then pass the array of comments on 
// each post object as a prop to an instance of the CommentSection component.


//two image tags