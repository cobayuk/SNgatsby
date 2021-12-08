/*
| ===========================================================
|    This file contains Header styles for Themes Platinum.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 31 Oct 2021
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import AssetHeader from "@assets/photos/agree/cover.jpg";
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/questrial";
import "@fontsource/dancing-script";

export const WrapperInvitation = styled(Box)`
    top: 100px;
    position: relative;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        top: 75px;
    }
    @media only screen and (min-width: 736px) and (max-width: 737px) {
        top: 30px;
    }
`;

export const Invite = styled.p`
    font-family: Crimson Text;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 15px;
    }
    color: white;
`;

export const Title = styled.p`
    font-family: Questrial;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 37px;
    letter-spacing: 0.3em;
    color: white;
    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 15px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 24px;
        line-height: 24px;
    }
`;

export const Groom = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    @media (max-width: 767px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
    }
    @media only screen and (min-width: 736px) and (max-width: 737px) {
        margin-top: 30px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        text-align: center;
        margin-top: 20px;
    }
    color: white;
    text-align: right;
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    @media (max-width: 767px) {
        font-size: 36px;
        line-height: 36px;
        text-align: center;
        margin: -20px 0px;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        margin: -20px 0px;
    }
    color: white;
`;

export const Bride = styled.p`
    font-family: Dancing Script;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 24px;
    @media (max-width: 767px) {
        font-size: 54px;
        line-height: 12px;
        text-align: center;
    }
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        font-size: 65px;
        line-height: 24px;
        text-align: center;
    }
    color: white;
    text-align: left;
`;

export const CountDown = styled.p`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    @media (min-width: 768px) {
        margin-top: -20px;
    }
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
    }
    color: white;
`;

export const Header = styled(Box)`
    margin-top: -14px;
    width: 100vw;
    height: 100vh;
    background:
        linear-gradient(
            rgba(0, 0, 0, 0.1), 
            rgba(0, 0, 0, 0.9)
        ),
        url(${AssetHeader});
    }
    background-size: cover;
    position: relative;
    background-position: 44%;
    @media (min-width: 768px) {
        margin-top: -16px;
        background-position: 35% 20%;
    }
    text-align: center;
`;

export const ResponsiveGrid = styled(Grid)`
    @media (max-width: 767px) {
        padding: 0 !important;
    }
`;

export const Arrow = styled.div`
    @media (min-width: 768px) {
        margin-top: -20px;
    }
    position: absolute;
    top: 115%;
    @media only screen and (min-width: 736px) and (max-width: 737px) {
        top: 115%;
    }
    left: 50%;
    transform: translate(-50%,-50%);
    span {
        display: block;
        width: 15px;
        height: 15px;
        @media only screen and (min-width: 736px) and (max-width: 737px) {
            width: 10px;
            height: 10px;
        }
        border-bottom: 2px solid #FFFFFF;
        border-right: 2px solid #FFFFFF;
        transform: rotate(45deg);
        margin: -10px;
        animation: animate 2s infinite;
    }
    span:nth-child(2) {
        animation-delay: -0.2s;
    }
    span:nth-child(3){
        animation-delay: -0.4s;
    }
    @keyframes animate {
        0%{
            opacity: 0;
            transform: rotate(45deg) translate(-20px,-20px);
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            transform: rotate(45deg) translate(20px,20px);
        }
    }
`;