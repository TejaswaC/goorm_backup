import React from 'react';
import {songSelect} from '../action';
import SongList from './SongList';

const App = () => {
	
	return (<div className="ui container grid"><div className="ui row"><div className="column eight wide">App<SongList /></div></div></div>)
	
	
};


export default App;