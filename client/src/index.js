import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import * as serviceWorker from './serviceWorker';

const App = () => (
	<div>
		<h1>Hello worlds!!</h1>
	</div>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
