import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "@styles/demo/platinum/galleryStyle";
import "./additional.css";
import FirstLandscape from "@assets/photos/asset-1.jpeg";
import SecondLandscape from "@assets/photos/asset-2.jpeg";
import ThirdLandscape from "@assets/photos/asset-5.jpeg";
import LastLandscape from "@assets/photos/asset-6.jpeg";
import FirstSquare from "@assets/photos/asset-4.jpeg";
import SecondSquare from "@assets/photos/asset-9.jpeg";
import ThirdSquare from "@assets/photos/asset-10.jpeg";
import FourthSquare from "@assets/photos/asset-3.jpeg";

const OurGallery = () =>  {

    const ListPhotos = [
        FirstLandscape,
        FirstSquare,
        SecondLandscape,
        ThirdLandscape,
        SecondSquare,
        ThirdSquare,
        FourthSquare,
        LastLandscape
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