import React, {Component} from 'react';



class CommentSection extends Component {
    constructor(){
        super();
        this.state = {
            comments: [],
            newComments: ''
        }
    };

    componentDidMount(){
        
        // this.setState({
        //     comments:  // ..
        // });
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