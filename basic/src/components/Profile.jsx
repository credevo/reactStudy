import React from 'react'; 
import Avatar from './Avatar';

export default function Profile(props) {
    return(
        <div className="profile">
            <Avatar imgUrl={props.imgUrl} isNew={props.isNew}/>
            <h1> {props.name}</h1>
            <h2> {props.job}</h2>
      </div>
    );
}