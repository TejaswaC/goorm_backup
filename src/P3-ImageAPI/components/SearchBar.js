import React, {Component} from 'react';

class SearchBar extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			term : ''
		}
		
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange = (event) => {
		console.log(event.target.value);
		this.setState({term : event.target.value})
			//	this.props.getTerm(this.state.term);

		
	}
	
	onFormSubmit(event){
		event.preventDefault();
				this.props.onSubmit(this.state.term);

		console.log(this.state.term);
	}
	render(){
		
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search:</label>
						<input type="text" 
							value = {this.state.term}
							//onChange={(e) => {this.setState({term :e.target.value})}}/></div></form></div>
							onChange={this.onInputChange}/></div></form></div>

			);
		
		
		
	}
	
	
	
}
export default SearchBar;