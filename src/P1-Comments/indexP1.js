import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	
	const comments = [
		{
			name : 'Alex',
			time : '5:00',
			comment : 'Great Post'
			
		},
		{
			name : 'Nis',
			time : '12:00',
			comment : 'Kya post hai bhai'
			
		},
		{
			name : 'Ayu',
			time : '18:00',
			comment : 'Sab kuch dhundala hai'
			
		}]
	return (
		
		<div className="ui container comments">
			<ApprovalCard><h4 className="header">Warning</h4>Are you sure you want to do that?</ApprovalCard>
			<ApprovalCard >
			<CommentDetail author="Sam" timeAgo="Today at 4:45PM" avatar={faker.image.avatar()} comment="Kya Batt"/>
			
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author="Alex" timeAgo="Yesterday at 4:45PM" avatar={faker.image.avatar()} comment="Badiya Thaa"/>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author="Jane" timeAgo="MOnday at 4:45PM" avatar={faker.image.avatar()} comment="Mazaa Aaya"/>
			
			</ApprovalCard>
			
			
		
		
		
		</div>
		
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));