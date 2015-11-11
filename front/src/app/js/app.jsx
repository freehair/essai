require('../stylesheets/styles.scss');
 
import React from 'react'
import Header from './components/header.jsx'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
		  
		    	{this.props.children}
		  	</div>
		)
	}
};
