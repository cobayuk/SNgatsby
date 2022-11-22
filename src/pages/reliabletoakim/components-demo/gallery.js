import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "@styles/temporary/wibiade/galleryStyle";
import "./additional.css";
import LandscapeTwo from "@assets/photos/akimaul/akim-landscape-1.jpg";
import LandscapeFive from "@assets/photos/akimaul/akim-landscape-2.jpg";
import LandscapeSix from "@assets/photos/akimaul/akim-landscape-4.jpg";
import LandscapeEight from "@assets/photos/akimaul/akim-potrait-8.jpg";
import LandscapeTen from "@assets/photos/akimaul/akim-potrait-3.jpg";
import PotraitOne from "@assets/photos/akimaul/akim-potrait-1.jpg";
import PotraitTwo from "@assets/photos/akimaul/akim-potrait-2.jpg";
import LandscapeSeven from "@assets/photos/akimaul/akim-potrait-7.jpg";

const OurGallery = () =>  {

    const ListPhotos = [
        LandscapeFive,
        LandscapeEight,
        PotraitOne,
        LandscapeTwo,
        LandscapeSeven,
        LandscapeTen,
        PotraitTwo,
        LandscapeSix,
    ];

    const PhotoItem = ({ image, thumb }) => (
        <LightgalleryItem group="any" src={image} thumb={thumb}>
            <img src={image} alt="gallery"/>
        </LightgalleryItem>
    );
    PhotoItem.propTypes = {
        image: PropTypes.string.isRequired,
        thumb: PropTypes.string
    };

    return(
        <>
            <Style.ContainerGallery>
                <div className="w-100">
                    <div className="flexbin">
                        <LightgalleryProvider>
                            {ListPhotos.map((photo, id) => (
                                <PhotoItem key={id} image={photo}/>
                            ))}
                        </LightgalleryProvider>
                    </div>
                </div>
            </Style.ContainerGallery>
        </>
    )
}

export default OurGallery;
