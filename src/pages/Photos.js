import React from 'react'; 
//import Images from './components/Images';

const Photos = (props) => { 

    return (
        <div>
            <p className="photos-page">{props.data.shootName}</p>
            <a href={props.data.link} target="_blank">
                <img src={props.data.imagesrc} alt="goddess shoot" />
            </a>
        </div>
    );

}

export default Photos;