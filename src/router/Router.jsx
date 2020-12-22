import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreatePost from '../components/CreatePost/CreatePost'
import EditPost from '../components/EditPost/EditPost'
import ListPost from '../components/ListPost/ListPost'
import PostDetails from '../components/PostDetails/PostDetails'

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={ListPost} />
      <Route path="/createPost" component={CreatePost} />
      <Route path="/edit/:id" component={EditPost} />
      <Route path="/:id" component={PostDetails} />
    </Switch>
  )
}

export default Router
