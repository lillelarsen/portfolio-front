import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Navbar from '../Navbar/';
import Home from '../../pages/Home';
import Blog from '../../pages/Blog';
import SingleBlog from '../../pages/SingleBlog';
import Footer from '../Footer';

import './app.css';


function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:slug" component={SingleBlog} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
