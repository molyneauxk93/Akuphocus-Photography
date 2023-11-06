import React from 'react'; 
//import Images from './components/Images';

const Photos = (props) => { 

    return (
        <div>
            <h2 className="photos-page">{props.data.shootName}</h2>
            <a href={props.data.link} target="_blank">
                <img src={props.data.imagesrc} class="img-fluid mx-auto d-block photos-img" alt="Photoshoots" />
            </a>
        </div>
    );

}

export default Photos;