import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            newComment: ''
        }
    }

    componentDidMount(){
        this.setState({
            comments: this.props.comments,
            newComment: ''
        });
    }

    addComment = (e) => {
        e.preventDefault();
        const comments = this.state.comments;
        const newComment = {
            username: 'LisaCee',
            text: this.state.newComment,
        };
        comments.push(newComment);
        this.setState({
            comments: comments,
            newComment: ""
        });
    }

    addNewCommentInput =(e) => {
        const newComment = e.target.value;
        this.setState({ 
            newComment: newComment
        });
    }

    render() {
        return(
            <div className= "comment-section">
               {this.state.comments.map((comment, i) => {
                    return (
                    <div className="index" key={i}>
                        <div className= "comment-username">{comment.username}</div>
                        <div className= "comment-text">{comment.text}</div>
                    </div>
                    )
               })} 

                <form className="inputField" onSubmit = {this.addComment}>
                    <input 
                        type = "text"
                        onChange = {this.addNewCommentInput}
                        placeholder = "Add a comment..."
                        value = {this.state.newComment}
                    />
                </form>        
            </div>
        );
    }    
}

//input tag

// component DidMount

//store in state 

// add comment to state upon mounting. 
export default CommentSection;



// The CommentSection component will receive the array of comments as props and 
// render each one with the username of the poster as well as the post's text.
//  Additionally, there should be an input box that allows users to submit a new comment for any post
// . Since there is no login page or anything of that sort, hard code a static username.