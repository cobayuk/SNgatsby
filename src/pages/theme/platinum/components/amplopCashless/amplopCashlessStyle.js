import styled from 'styled-components';
import "@fontsource/oxygen";
import { Grid } from '@material-ui/core';

export const SectionCashless = styled.section`
    text-align: center;
`;

export const CashlessTitle = styled.h1`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
    padding-top: 40px;
    text-align: center;
    @media (min-width: 768px) {
        padding-top: 10px;
    }
`;

export const AllEwallet = styled.img`
    transform: scale (1.2);
`;

export const CashlessDescription = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    text-align: center;
`;

export const SectionBarcode = styled.div`
    background-color: #E2B62E;
    p {
        font-family: Oxygen;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
        color: #FFFFFF;
        padding-top: 39px;
        padding-bottom: 16px;
    }
`;

export const InnerBarcode = styled.div`
    display: inline-flex;
`;

export const GirlAvatar = styled.img`
    width: 128px;
    height: auto;
    float: left;
    left: 0;
    position: absolute;
    @media (min-width: 768px) {
        left: 11em;
    }
`;

export const ManAvatar = styled.img`
    width: 93px;
    height: auto;
    float: right;
    right: 0;
    position: absolute;
    @media (max-width: 360px) {
        z-index: 2
    }
    @media (min-width: 768px) {
        right: 11em;
    }
`;

export const SquareBarcode = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 30px 5px rgb(0 0 0 / 25%);
    border-radius: 50px;
    width: 287px;
    height: 356px;
    display: grid;
    margin: 0 auto;
    position: relative;
    margin-bottom: 61px;
    @media (max-width: 360px) {
        width: 200px;
        height: 300px;
        z-index: 10;
    }
    @media (min-width: 375px) {
        width: 250px;
        height: 300px;
        z-index: 10;
    }
`;

export const QRCode = styled.img`
    transform: scale(0.7);
    height: 100%;
    margin: 0 auto;
    position: absolute;
    left: -30px;
    right: 0;
    top: -40px;
    @media (max-width: 360px) {
        transform: scale(0.6);
        left: -48px;
    }
    @media (min-width: 375px) {
        left: -25px;
        top: -25px;
    }
`;

export const PersonTitle = styled.span`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #888282;
    margin-top: 22em;
    @media (max-width: 360px) {
        margin-top: 18em;
    }
    @media (min-width: 375px) {
        margin-top: 19em;
    }
`;

export const PersonName = styled.span`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #E2B62E;
    margin-top: -24px;
`;