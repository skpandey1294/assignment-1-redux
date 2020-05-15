import React from 'react'
import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './redux/store/index'

import Navbar from './components/Navbar/navbar.jsx'
import Posts from './components/Post/posts.jsx'
import UserPost from './components/Post/userPost.jsx'
import Users from './components/User/users.jsx'
import UserInfo from './components/User/userInfo.jsx'
import Albums from './components/Albums/albums.jsx'
import AlbumPhotos from './components/Albums/albumPhotos.jsx'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <div className="App">
 

          <Route path="/user/albums" exact component={Albums} />
          <Route path="/user/albums/:albumId" exact component={AlbumPhotos} />
          <Route path="/users/:userId" component={UserInfo} />
          <Route path="/users" exact component={Users} />
          <Route path="/" exact component={Posts} />
          <Route path="/:postId" exact component={UserPost} />

    </div>
    </Provider>
    </BrowserRouter>
  )
}

export default App
