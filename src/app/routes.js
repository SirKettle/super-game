
import React from 'react';
import { render } from 'react-dom';

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
	          	<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<h1>App</h1>
				{ this.props.children }
			</div>
		);
	}
}

class Home extends React.Component {
	render() {
		return (<h1>Home</h1>);
	}
}

class About extends React.Component {
	render() {
		return (<h1>About</h1>);
	}
}

//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>

//         {/*
//           next we replace `<Child>` with `this.props.children`
//           the router will figure out the children for us
//         */}
//         {this.props.children}
//       </div>
//     )
//   }
// })

const routes = {
	path: '/',
	component: App,
	indexRoute: { component: Home },
	childRoutes: [
		{ path: 'about', component: About }
	]
};

export default routes;