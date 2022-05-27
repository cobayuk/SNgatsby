import React from "react";
import PropTypes from "prop-types";
import {
    LightgalleryProvider,
    LightgalleryItem
} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import * as Style from "@styles/temporary/galleryStyle";
import "./additional.css";
import FirstPhoto from "@assets/photos/yesibain/1.jpeg";
import SecondPhoto from "@assets/photos/yesibain/2.jpeg";
import ThirdPhoto from "@assets/photos/yesibain/3.jpeg";
import FourthPhoto from "@assets/photos/yesibain/4.jpeg";

const OurGallery = () =>  {

    const ListPhotos = [
        FirstPhoto,
        ThirdPhoto,
        FourthPhoto,
        SecondPhoto
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
