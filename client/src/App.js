import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/Layout/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Homepage from './components/Homepage';
import Activity from './components/Activity';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import Alert from './components/Layout/Alert';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Route exact path='/' component={Home} />
				<Alert />
				<section className='container'>
					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<PrivateRoute exact path="/dashboard" component={Homepage} />
						<PrivateRoute exact path="/activity/:id" component={Activity} />
						<PrivateRoute exact path="/notfound" component={NotFound} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
};

export default App;
