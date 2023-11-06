import React from 'react';
import Photos from '../components/Photos';

export default function Photoshoot() {

    const photoshoot = [
        {
            shootName: 'Elizabeth Park Shoot',
            link: 'https://ibb.co/album/ZWrwDz',
            imagesrc: 'https://i.ibb.co/GVDjSm5/Kim-Eliz-Prk-18.jpg'
        },
        {
            shootName: 'Black Goddess Shoot',
            link: 'https://ibb.co/album/hLs79y',
            imagesrc: 'https://i.ibb.co/LtfBVVG/Black-Goddess-1.jpg'
        },
        {
            shootName: 'Hillstead Museum',
            link: 'https://ibb.co/album/zXZxfW',
            imagesrc: 'https://i.ibb.co/PrGHrLS/Hillstead-5.jpg'
        },
        {
            shootName: 'More Portraits',
            link: 'https://ibb.co/album/wBVWLX',
            imagesrc: 'https://i.ibb.co/dpy9fbd/7-29-shoot-3.jpg'
        }

    ]

    // return photoshoot object with data to be loaded into the photos page
    return (
        <div>
            {
                photoshoot.map((photos) => <Photos data={photos} />)
            }
        </div>
    );
}