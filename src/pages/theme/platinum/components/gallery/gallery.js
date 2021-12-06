import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "./galleryStyle";
import "./additional.css";
import FirstLandscape from "@assets/photos/agree/landscape-1.jpg";
import SecondLandscape from "@assets/photos/agree/landscape-2.jpg";
import ThirdLandscape from "@assets/photos/agree/landscape-3.jpg";
import LastLandscape from "@assets/photos/agree/landscape-4.jpg";
import FirstSquare from "@assets/photos/agree/potrait-1.jpg";
import SecondSquare from "@assets/photos/agree/potrait-2.jpg";
import ThirdSquare from "@assets/photos/agree/potrait-3.jpg";
import FourthSquare from "@assets/photos/agree/potrait-4.jpg";

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