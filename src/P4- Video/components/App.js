import React,{Component} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
	state = {
		videos : [],
		selectedValue: null,
	};
	onTermSubmit = async (term) => {
		console.log(term);
	const response = await youtube.get('/search',{
		params: {
			q : term
		}
	});	
		this.setState({videos : response.data.items,
					  selectedValue : response.data.items[0]
					  
					  });
		console.log();
	}  
	
	
	onVideoSelect = (video) => {
		this.setState({selectedValue :video});
		console.log(video);
		console.log(`From State - ${this.state.selectedValue}`);
	}
	
	
	render(){
		return(<div className="ui container">
				
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="ten wide column">
							<VideoDetail video={this.state.selectedValue}/></div>
						<div className="six wide column">	<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div></div></div>
				
				</div>);
		
	}
	
	
	
	
	
}




export default App;