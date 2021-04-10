import styles from './App.module.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { HomePage, FavouritesPage } from '../../pages';

export function App() {
  return (
    <>
      <Router>
        <header className={styles.header}>
          <NavLink exact activeClassName={styles.linkActive} className={styles.link} to="/">Все котики</NavLink>
          <NavLink exact activeClassName={styles.linkActive} className={styles.link} to="/favourites">Любимые котики</NavLink>
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
