// import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Start from './components/start/Start'
import FriendList from './components/friends/FriendList'
import FindFriends from './components/search/FindFriends'
import Details from './components/friends/Details'
import BadUrl from './components/BadUrl'
import './App.css';

function App() {
  return (
    <div className="App">
	<header>
		<h1> Routing demo </h1>
		<nav>
			<Link to="/"> Start </Link>
			<Link to="/friends"> Mina vänner </Link>
			<Link to="/search"> Hitta vänner </Link>
			<Link to="/error"> Felaktig länk </Link>
		</nav>
	</header>
	<main>
	<Switch>
		<Route path="/" exact> <Start /> </Route>
		<Route path="/friends/:id"> <Details /> </Route>
		<Route path="/friends"> <FriendList /> </Route>
		<Route path="/friendsss"> <Redirect to="/friends" /> </Route>
		<Route path="/search"> <FindFriends /> </Route>
		<Route path="/"> <BadUrl /> </Route>
	</Switch>
	</main>
	<footer>
		React Router demo
	</footer>
    </div>
  );
}

export default App;
