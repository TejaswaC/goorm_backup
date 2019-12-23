import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class  App extends React.Component{
	
	constructor(props){
		super(props);
		
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}
	
	state = {
		images : []
	}
	
	async onSearchSubmit(term){
		console.log(`From App Componet: ${term}`);
		const response =await unsplash.get('/search/photos', {
				params : {query: term},
				
			});
		
		this.setState({images : response.data.results});
		console.log(response);
	}
	
	termMila(term){
				console.log(`From TermMila Componet: ${term}`);
			

	}
	render(){	return (
		<div className="ui container" style={{marginTop : '10px'}}>From App Component<SearchBar onSubmit = {this.onSearchSubmit}/>
		Found Images: {this.state.images.length}
		<ImageList image={this.state.images}/></div>
	);}
	
	
}


export default App;