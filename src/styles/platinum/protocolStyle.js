import styled from 'styled-components';
import "@fontsource/oxygen";
import { Grid } from '@material-ui/core';

export const ContainerProtocol = styled.section`
    background: #F7F7F7;
`;

export const InnerContainer = styled.div`
    
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
`;

export const IntroProtocol = styled.h1`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #000000;
    padding-top: 40px;
    text-align: center;
`;

export const SummaryProtocol = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #6c757d;
    padding: 0px 40px 20px 40px;
    @media (min-width: 1024px) {
        padding: 0px 100px 20px 100px;
    }
`;

export const ContainerItem = styled.div`
    margin-bottom: 20px;
`;

export const ProtocolImage = styled.img`
    height: auto;
    display: block;
    margin: 0 auto;
    @media (min-width: 768px) {
        margin: 32px 0px;
    }
    max-width: 100%;
    height: auto;
`;

export const WrapperProtocol = styled.div`
    padding: 0px 15px;
    @media (min-width: 768px) {
        padding: 0px 40px;
    }
`;

export const ProtocolTitle = styled.h3`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bolder;
    font-size: 32px;
    line-height: 32px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
    text-align: left;
    color: #000000;
`;

export const ProtocolDescription = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #6c757d;
    margin-bottom: 30px;
`;

export const GridProtocol = styled(Grid)`
    display: flex;
    align-items: center;
`;

export const GridOrderMobile = styled(Grid)`
    @media (min-width: 576px) {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
    @media(min-width: 768px) {
        order: 12;
    }
`;

export const GridContainer = styled(Grid)`
    padding-top: 16px;
    padding-bottom: 16px;
`;

export const GridItem = styled(Grid)`
    @media (min-width: 576px) {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
    }
`;