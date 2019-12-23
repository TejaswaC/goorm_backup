import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay.js';
import Spinner from './Spinner.js';

/* const App = () => {
	var latitude =0;
	window.navigator.geolocation.getCurrentPosition((position) => {console.log(position); } , (error) => {console.log(error.message)});
	return (
		<div>Hello World <h1>Latitude: {latitude}</h1>
		<SeasonsDisplay></SeasonsDisplay>
		</div>
	
	
	
	);
	
	
	
}    */


class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {lat : null, errorMessage : ''};
		
		
	}
	
	componentDidMount(){console.log("Monted");window.navigator.geolocation.getCurrentPosition((position) => {
			this.setState({lat: position.coords.latitude})
		}, (error) => {this.setState({errorMessage : error.message})});}
	
	componentDidUpdate(){console.log("Updated");}
	
	
	renderContent(){
		
		if(this.state.errorMessage && !this.state.lat)
			{
				return (<div>Error: {this.state.errorMessage}</div>)
			}
		
		if(this.state.lat && !this.state.errorMessage)
			{
				return (<SeasonsDisplay lat={this.state.lat}></SeasonsDisplay>)
			}
		
		return (<div><Spinner text="Trying to Grab Your Location..." /></div>)
		
		
		
	}
	
	render(){
		
		return (<div className="border red">
		{this.renderContent()}
		</div>)
		
		
	}
	
	
}






ReactDOM.render(<App />, document.querySelector('#root'));