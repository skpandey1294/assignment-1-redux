import React from 'react'
import './App.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from './redux/store/index'

import Navbar from './components/Navbar/navbar.jsx'
import Posts from './components/Post/posts.jsx'
import UserPost from './components/Post/userPost.jsx'

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <div className="App">
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post" exact component={UserPost} />
        </Switch>
    </div>
    </Provider>
    </BrowserRouter>
  )
}

export default App
