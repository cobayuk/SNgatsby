/*
| ===========================================================
|    This file contains Intro styles for Themes Platinum.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 14 Nov 2021
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
// Fonts
import "@fontsource/crimson-text";
import "@fontsource/dancing-script";

export const WrapperIntro = styled.div`
    background-color: #F1EDE7;
    padding-bottom: 32px;
`;

export const ContainerIntro = styled.div`
    padding: 30px 100px 0px 100px;
    @media (max-width: 600px) {
        padding: 30px 50px 0px 50px;
    }
`;

export const IntroText = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #58595B;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const Ampersand = styled.p`
    font-family: Dancing Script;
    font-weight: normal;
    font-size: 50px;
    line-height: 24px;
    text-align: center;
    color: #B37C62;
    display: block;
    padding-bottom: 20px;
    @media (max-width: 600px) {
        font-size: 48px;
        line-height: 24px;
    }
`;

export const Person = styled.p`
    font-family: Dancing Script;
    font-weight: normal;
    font-size: 50px;
    line-height: 24px;
    text-align: center;
    color: #B37C62;
    @media (max-width: 600px) {
        font-size: 48px;
        line-height: 24px;
    }
`;

export const Parent = styled.p`
    font-family: Crimson Text;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    text-align: center;
    color: #58595B;
    margin-top : -30px;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const GroomWrapper = styled.div`
    margin-top: -24px;
    @media (max-width: 600px) {
        padding: 0px 25px;
    }
`;

export const BrideWrapper = styled.div`
    @media (max-width: 600px) {
        padding: 0px 25px;
    }
`;
