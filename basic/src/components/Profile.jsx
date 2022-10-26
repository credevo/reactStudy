import React from 'react'; 

export default function Profile(props) {
    return(
        <div className="profile">
            <img class="photo" src={props.imgUrl} alt="avatar"/>
            <h1> {props.name}</h1>
            <h2> {props.job}</h2>
      </div>
    );
}