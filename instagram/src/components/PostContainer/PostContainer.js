import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({postData}) => {
    return (
        <div className='postContainer'>
            <div className='thumbnail'>
                <img src={postData.thumbnailUrl}/>
                <span>{postData.username}</span>
            </div>
            <div className='postImage'>
                <img src={postData.imageUrl} />
            </div>
            <CommentSection comments={postData.comments}/>
        </div>
    ) 
 }
export default PostContainer;


// Each PostContainer component will then pass the array of comments on 
// each post object as a prop to an instance of the CommentSection component.


//two image tags