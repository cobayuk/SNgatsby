import styled from 'styled-components';
import "@fontsource/oxygen";

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
    transform: scale (1.2) !important;
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
        // padding-top: 39px;
        // padding-bottom: 16px;
        padding: 39px 30px 16px 40px;
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
    @media (max-width: 767px) {
        display: block;
    }
    @media (min-width: 768px) {
        display: none;
    }
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

export const ManAvatarFull = styled.img`
    @media (max-width: 767px) {
        display: none;
    }
    @media (min-width: 768px) {
        display: block;
    }
    width: 170px;
    height: auto;
    float: right;
    right: 0;
    position: absolute;
    @media (min-width: 768px) {
        right: 7em;
    }
`;

export const SquareBarcode = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 30px 5px rgb(0 0 0 / 25%);
    border-radius: 50px;
    width: 287px;
    height: 356px;
    // display: grid;
    span {
        display: block;
    }
    margin: 0 auto;
    position: relative;
    margin-bottom: 61px;
    @media (max-width: 360px) {
        width: 200px;
        height: 390px;
        z-index: 10;
    }
    @media (min-width: 375px) {
        width: 250px;
        height: 380px;
        z-index: 10;
    }
`;

export const BankLogo = styled.img`
    margin-top: 20px;
`;

export const AccountNumber = styled.span`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #2B2929;
    margin: 10px;
    text-decoration: none;
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
    font-size: 10px;
    line-height: 13px;
    color: #888282;
    // margin-top: 22em;
    // @media (max-width: 360px) {
    //     margin-top: 18em;
    // }
    // @media (min-width: 375px) {
    //     margin-top: 19em;
    // }
`;

export const PersonName = styled.span`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #E2B62E;
    margin-top: 8px;
`;

export const CopyToClipboardButton = styled.button`
    width: 120px;
    height: 30px;
    background: #E2B62E;
    border-radius: 50px;
    border: none;
    color: white;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    margin-top: 8px;
    &:hover, &:focus {
        background: #b98e0a;
    }
`;

export const SeparatorContainer = styled.div`
    display: inline-flex;
    margin-top: 15px;
`;

export const LineSeparator = styled.hr`
    border: 1px solid #BBB0B0;
    width: 68px;
    @media (max-width: 360px) {
        width: 40px;
    }
`;

export const WordSeparator = styled.span`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #BBB0B0;
    top: 2px;
    position: relative;
    margin: 0px 10px;
`;