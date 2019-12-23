import React,{Component} from 'react';
import ImageCard from './ImageCard';
import './imageList.css';

const ImageList = (props) => {
	
	
	//console.log(props.image.data.results);
	const imagesL = props.image.map( image => {return image});
	
	return (
	
		<div className="image-list"><ImageList image={imagesL} /></div>
	
	);
	
	
	
}

export default ImageList;