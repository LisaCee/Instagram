import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import { Container, Row, Col } from 'reactstrap';

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            likes: this.props.post.likes, 
        }
    }

    incrementLike = () => {
        let likes = this.state.likes;
        (this.state.liked ? likes-- : likes++);
        this.setState({likes});
    }
    clickLike = (e) => {
        this.setState({liked: !this.state.liked});
        this.incrementLike();
    }

    render() {
    return (
        <Container>
            <div className='postContainer'>
                <Row className='header'>
                    <img className='thumbnail' src={this.props.post.thumbnailUrl}/>
                    <span>{this.props.post.username}</span>
                </Row>
                <Row>
                    <div className='postImage'>
                        <img src={this.props.post.imageUrl} />
                    </div>
                </Row>
                <Row>
                    <div className='likes' onClick={this.clickLike}><i class="far fa-heart"></i>{this.state.likes}</div> 
                </Row>
                </div>
                
                <CommentSection comments={this.props.post.comments}/>
        </Container>
    ) 
    }   
 }
export default PostContainer;
