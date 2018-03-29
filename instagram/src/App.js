import React from 'react';

import './App.css';
// import dummyData from './dummy-data';
// import PostContainer from './components/CommentSection/CommentSection';
// import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

const App = () => { 
  return(
      <div className="App">
      {/* <SearchBar/>
      <PostContainer/>      */}
      <CommentSection />
      </div>
    );
  }


export default App;
