import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
	
	if(month >2 && month < 0){
		return (lat > 0 ? 'summer' : 'winter') 
	}
	else{
		return (lat >0 ? 'winter' : 'summer')
	}
	
	
}

const seasonConfig = {
	summer : {
		text : 'SUMMER',
		iconName : 'sun'
		
	},
	winter : {
		text : 'WINTER',
		iconName : 'snowflake'
		
	}
	
	
	
	
	
	
	
};
const SeasonsDisplay = (props) => {
	var month = new Date().getMonth;
	var season = getSeason(props.lat,month);
	const {text, iconName} = seasonConfig[season];
	//const icon = season === 'winter' ? 'snowflake' : 'sun';
	console.log(iconName);
	return (
		
		<div className={`seasons-display ${season}`}>
			<i className={`${iconName} icon massive i-left`} />
			<h1>Season: {season}</h1>Seasons Greetings for {text}
			<i className={`${iconName} icon massive i-right`} />

		</div>
	
	
	);
	
	
	
	
}


export default SeasonsDisplay;

