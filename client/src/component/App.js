import React from 'react';
import TopNav from './top-nav';
import ItemsBody from './ItemsBody';
import PostForm from './PostForm';

function App() {
  return (
    <div className="wrapper">
      <TopNav />
      <div className="container">
          <ItemsBody />
          <PostForm />
      </div>
      </div>

  );
}


export default App;
