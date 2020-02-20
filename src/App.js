import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { Footer } from './components/Footer'
import Header from './components/Header'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}