import React from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => { 
  return(
      <div className="App">
      <SearchBar/>
      <PostContainer/>     
      </div>
    );
  }


export default App;
