import React from 'react'; 

export default function Avatar({imgUrl,isNew}) {
    return(
        <div className="avarta">
            <img className="photo" src={imgUrl} alt="avatar"/>
            {isNew && <span className="new">New</span>}
        </div>
    );
}