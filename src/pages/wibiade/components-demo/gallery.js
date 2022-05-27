import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "@styles/temporary/wibiade/galleryStyle";
import "./additional.css";
import LandscapeTwo from "@assets/photos/wibiadelia/wa-landscape-new-1.jpg";
import LandscapeFive from "@assets/photos/wibiadelia/wa-landscape-new-2.jpg";
import LandscapeSix from "@assets/photos/wibiadelia/wa-landscape-11.jpg";
import LandscapeEight from "@assets/photos/wibiadelia/wa-landscape-8.jpg";
import LandscapeTen from "@assets/photos/wibiadelia/wa-landscape-new-5.jpg";
import PotraitOne from "@assets/photos/wibiadelia/wa-potrait-2.jpg";
import PotraitTwo from "@assets/photos/wibiadelia/wa-potrait-new-1.jpg";
import LandscapeSeven from "@assets/photos/wibiadelia/wa-landscape-new-4.jpg";

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
