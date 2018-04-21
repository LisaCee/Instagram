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
        <Container className='container'>
            <div className='postContainer'>
                <Row className='header'>
                    <Col xs="2">
                    <img className='thumbnail' alt='thumbnail' src={this.props.post.thumbnailUrl}/>
                    </Col>
                    <span className='username'>{this.props.post.username}</span>
                </Row>
                <Row>
                    <div className='postImage'>
                        <img className='postImage' alt='post' src={this.props.post.imageUrl} />
                    </div>
                </Row>
                <Row className='icons'>
                    <div className='likes' onClick={this.clickLike} >
                        <i className="far fa-lg fa-heart"></i>
                    </div> 
                    <div className='comment'>
                        <i className="far fa-lg fa-comment fa-flip-horizontal"></i>
                    </div>
                </Row>
                <Row>
                    <div className='likeNum'>
                        {this.state.likes} likes
                    </div>    
                </Row>
                </div>

                <CommentSection comments={this.props.post.comments}/>
        </Container>
    ) 
    }   
 }
export default PostContainer;
