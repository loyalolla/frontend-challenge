import styles from './App.module.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomePage, FavouritesPage } from '../../pages';

export function App() {
  return (
    <>
      <Router>
        <header className="">
          header
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/favourites" exact component={FavouritesPage} />
          </Switch>
        </main>
      </Router>
    </>
  );
}
