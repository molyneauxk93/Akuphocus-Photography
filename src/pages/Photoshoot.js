import React from 'react';
import Photos from './Photos';

export default function Photoshoot() {

    const photoshoot = [
        {
            shootName: '',
            link: '',
            imagesrc: ''
        },
        {
            shootName: '',
            link: '',
            imagesrc: ''
        },
        {
            shootName: '',
            link: '',
            imagesrc: ''
        }

    ]

    // return photoshoot object with data to be loaded into the photos page
    return (
        <div>
            {
                photoshoot.map((photos) => <Photos data={photos} />)
            }
        </div>
    )
}