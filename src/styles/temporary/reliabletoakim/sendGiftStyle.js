import styled from 'styled-components';
import "@fontsource/oxygen";

import AssetHeader from "@assets/ornaments/wall.png";
import Modal from '@material-ui/core/Modal';

export const SectionGift = styled.section`
    background: #FFFFFF;
    padding: 20px 0px 80px 0px;
    width: 100vw;
    background: url(${AssetHeader});
    }
    background-size: cover;
    position: relative;
    background-position: 55%;
    @media (min-width: 768px) {
        background-position: 35% 20%;
    }
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
    margin-bottom: 30px;
    @media (min-width: 768px) {
        padding-top: 10px;
    }
`;

export const CashlessDescription = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    padding-bottom: 30px;
`;

export const InnerModal = styled.div`
    display: grid;
    border-radius: 24px;
    width: 287px;
    height: 356px;
    justify-items: center;
    @media (max-width: 360px) {
      width: 200px;
      height: 390px;
    }
    @media (min-width: 375px) {
        width: 250px;
        height: 380px;
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
    width: 150px;
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
    cursor: pointer;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    touch-action: manipulation;
    will-change: transform;
    display: inline-block;
    &:hover, &:focus {
        background: #b98e0a;
        // box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
    }
`;

export const SeparatorContainer = styled.div`
    display: inline-flex;
    margin-top: 15px;
`;

export const LineSeparator = styled.hr`
    border: 1px solid #BBB0B0;
    width: 68px;
    height: 2px;
    margin-top: 8px;
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


export const GiftContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const OpenGift = styled.button`
  text-decoration: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  :hover {
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgb(135 138 137 / 40%);
  }
  padding: 8px 36px;
  border-radius: 45px;
  border: none;
  background: white;
  display: flex;
  align-items: center;
  transition: all 0.3s ease 0s;
  span {
    color: #B37C62;
    font-weight: 700;
  }
`;

export const GiftIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 16px;
`;
