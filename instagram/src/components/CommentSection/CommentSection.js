import React, {Component} from 'react';



class CommentSection extends Component {
    constructor(){
        super();
        this.state = {
            comments: [],
            newComment: ''
        };
    }

    componentDidMount(){
        console.log(this.props.comments);
        this.setState({
            comments: this.props.comments
        });
    }

    addComment = event => {
        event.preventDefault();
        const newUser = {
            username: 'Lisa and Stephanie',
            text: this.state.newComment
        };
        
        const commentsArray = this.state.comments;
        commentsArray.push(newUser);
        this.setState({
            comments: commentsArray,
            newComment: ""
        });
    }

    addNewCommentInput = event => {
        this.setState({ newComment: event.target.value});
    }

    render() {
        return(
            <div className= "comment-section">
                {this.state.comments ? this.state.comments.map((comment, i) => (
                    <div className="index" key={i}>
                    <div className= "comment-username">{comment.username}</div>
                    <div className= "comment-text">{comment.text}</div>
                    </div>)
                ) : null}  {/*if there are comments - yes, if not -no*/}         
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