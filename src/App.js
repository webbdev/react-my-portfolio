import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import BlogPage from './components/pages/BlogPage'
import Post from './components/blog/posts/Post'
import { NotFound } from './components/pages/NotFound'
import { Layout } from './components/Layout'
import { Footer } from './components/layout/Footer'
import Header from './components/layout/Header'
import Project from './components/projects/Project'
import ScrollToTop from './components//ScrollToTop'

import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/:id" render={(props) => <Project {...props}/>} />
            <Route exact path="/blog/:id" render={(props) => <Post {...props}/>} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </React.Fragment>
  )
}

export default App