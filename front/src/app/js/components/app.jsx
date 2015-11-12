 
import React from 'react';
import Header from './header.jsx';
import connectToStores from 'alt/utils/connectToStores';

class App extends React.Component {
	
	/*static getStores() { return null; }
	static getPropsFromStores() { return null; }*/

	render() {
		return (
			<div>
				<Header/>
		  
		    	<div className="container-fluid">
                    {this.props.children}
                </div>
		  	</div>
		)
	}
}

// Exposition
export default App;