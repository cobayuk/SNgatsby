import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "@styles/temporary/wibiade/galleryStyle";
import "./additional.css";
import LandscapeOne from "@assets/photos/wibiadelia/wa-landscape-1.jpg";
import LandscapeTwo from "@assets/photos/wibiadelia/wa-landscape-2.jpg";
import LandscapeThree from "@assets/photos/wibiadelia/wa-landscape-3.jpg";
import LandscapeFour from "@assets/photos/wibiadelia/wa-landscape-4.jpg";
import LandscapeFive from "@assets/photos/wibiadelia/wa-landscape-5.jpg";
import LandscapeSix from "@assets/photos/wibiadelia/wa-landscape-6.jpg";
import LandscapeSeven from "@assets/photos/wibiadelia/wa-landscape-7.jpg";
import LandscapeEight from "@assets/photos/wibiadelia/wa-landscape-8.jpg";
import LandscapeNine from "@assets/photos/wibiadelia/wa-landscape-9.jpg";
import LandscapeTen from "@assets/photos/wibiadelia/wa-landscape-10.jpg";
import LandscapeEleven from "@assets/photos/wibiadelia/wa-landscape-11.jpg";
import PotraitOne from "@assets/photos/wibiadelia/wa-potrait-1.jpg";
import PotraitTwo from "@assets/photos/wibiadelia/wa-potrait-2.jpg";
import PotraitThree from "@assets/photos/wibiadelia/wa-potrait-3.jpg";
import PotraitFour from "@assets/photos/wibiadelia/wa-potrait-4.jpg";
import PotraitFive from "@assets/photos/wibiadelia/wa-potrait-5.jpg";
import PotraitSix from "@assets/photos/wibiadelia/wa-potrait-6.jpg";

const OurGallery = () =>  {

    const ListPhotos = [
        LandscapeEight,
        PotraitOne,
        LandscapeTwo,
        LandscapeThree,
        LandscapeFour,
        PotraitFour,
        LandscapeFive,
        LandscapeSix,
        PotraitTwo,
        PotraitThree,
        LandscapeSeven,
        PotraitFive,
        PotraitSix,
        LandscapeNine,
        LandscapeTen,
        LandscapeEleven,
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
