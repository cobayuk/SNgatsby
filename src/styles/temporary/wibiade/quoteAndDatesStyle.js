/*
| ===========================================================
|    This file contains Quotes styles for Themes Platinum.
| ===========================================================
|
| Author  : Sungnikah Corporation's.
| Date    : 29 Nov 2021
| Develop : Arie Aditya Nugraha, Dimas Prasetyo (Frontend Dev).
*/

import styled from 'styled-components';
import "@fontsource/crimson-text";
import "@fontsource/dm-serif-display";
import "@fontsource/overlock";

export const QuotesContainer = styled.div`
    // background-color: #FFFFFF;
    background-color: #F7F7F7;
    padding: 50px 0px 50px 0px;
`;

export const QuotesText = styled.p`
    font-family: Crimson Text;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #58595B;
    padding: 10px 50px;
`;

export const WeddingDate = styled.p`
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #C2A38E;
    margin: 40px 0px;
    @media (min-width: 1024px) {
      font-size: 30px;
    }
`;

export const ProgramTitle = styled.span`
    font-family: DM Serif Display;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #C2A38E;
`;

export const ProgramTime = styled.span`
    font-family: Overlock;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #58595B;
`;

export const ContainerProgram = styled.div`
    display: grid;
`;

export const SecondContainerProgram = styled.div`
    display: grid;
    border-left: 3px solid #58595B;
`;

export const WeddingLocation = styled.p`
    font-family: Overlock;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #58595B;
    margin-top: 40px;
    padding: 0px 50px;
`;

export const WrapperMap = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export const ReasonDescription = styled.p`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    line-height: 24px;
    font-size: 14px;
    padding: 0px 40px;
    color: #707070;
    margin-top: 40px;
    text-align: center;
`;

export const GoToMap = styled.a`
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    padding: 12px 32px;
    background: #E77F78;
    cursor: pointer;
    border-radius: 30px;
    border: none;
    margin-bottom: 24px;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    touch-action: manipulation;
    will-change: transform;
    display: inline-block;
    &:focus, &:hover {
        background: #f79c96;
        box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
        transform: translateY(-2px);
    }
`;
